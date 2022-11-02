import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions, {
  dialogActionsClasses,
} from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
export default function SendEmailSubscribe(handlePutToggle) {
  return (
    <div>
      <Dialog
        open={handlePutToggle.toggle}
        PaperProps={{
          style: {
            width: "100%",
          },
        }}
      >
        <DialogTitle>Send Email</DialogTitle>

        <DialogContent>
          <p style={{ color: "red" }}>
            * Nội dung email sẽ được gửi đến tất cả các email có trong danh sách
            đăng ký
          </p>
          <form>
            <div className="row">
              <div>
                <div className="form-group ">
                  <label className="required">Tiêu đề</label>
                  <input type="text" className="form-control"></input>
                </div>

                <div className="form-group " style={{ marginTop: 20 }}>
                  <label className="required">Nội dung</label>
                  <textarea
                    type="text"
                    className="form-control "
                    style={{
                      height: "200px",
                    }}
                  ></textarea>
                </div>
              </div>
            </div>
          </form>
        </DialogContent>

        <DialogActions>
          <div className="button">
            <button
              type="reset"
              value="Reset"
              className="btn btn-primary text-center"
            >
              Send
            </button>
            <button
              type="reset"
              value="Reset"
              style={{ marginLeft: 20 }}
              className="btn btn-danger"
              onClick={handlePutToggle.handlePutToggle}
            >
              Cancel
            </button>
          </div>
        </DialogActions>
      </Dialog>
    </div>
  );
}
