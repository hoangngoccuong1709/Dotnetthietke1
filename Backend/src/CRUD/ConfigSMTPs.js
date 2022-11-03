import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions, {
  dialogActionsClasses,
} from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import { useDispatch } from "react-redux";
import { sendEmailAll } from "../kAcctions/Subcribe";

export default function ConfigSMTPs(handlePutToggle) {
  return (
    <div>
      <Dialog
        open={true}
        PaperProps={{
          style: {
            width: "100%",
          },
        }}
      >
        <DialogTitle>ConfigSMTPs</DialogTitle>

        <DialogContent>
          <form>
            <div className="row">
              <div>
                <div className="form-group ">
                  <label className="required">Email</label>
                  <input type="text" className="form-control"></input>
                </div>

                <div className="form-group ">
                  <label className="required">SMTP</label>
                  <input type="text" className="form-control"></input>
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
            >
              Cancel
            </button>
          </div>
        </DialogActions>
      </Dialog>
    </div>
  );
}
