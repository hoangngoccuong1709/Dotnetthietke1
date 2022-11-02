import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions, {
  dialogActionsClasses,
} from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import { useDispatch } from "react-redux";
import { sendEmailAll } from "../kAcctions/Subcribe";

export default function SendEmailSubscribe(handlePutToggle) {
  const dispatch = useDispatch();

  const [data, setData] = useState({
    sendName: "",
    sendNameEmail: "",
    passSMTP: "",
    title: "",
    content: "",
  });

  const handleOnchange = (e, id) => {
    let copyState = { ...data };
    copyState[id] = e.target.value;
    setData({
      ...copyState,
    });
  };

  const handleOnSend = async () => {
    const onSend = new Promise((resole, reject) => {
      try {
        dispatch(sendEmailAll(data));
      } catch (e) {
        reject(e);
      }
    });
  };

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
          <p style={{ color: "red", fontSize: "13px" }}>
            * Nội dung email sẽ được gửi đến tất cả các email có trong danh sách
            đăng ký <br />
            <a
              href="https://support.google.com/mail/answer/185833?hl=vi"
              target="_blank"
            >
              - Hướng dẫn thiết lập mật khẩu ứng dụng
            </a>
          </p>

          <form>
            <div className="row">
              <div>
                <div className="form-group ">
                  <label className="required">Tên người gửi</label>

                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => handleOnchange(e, "sendName")}
                  ></input>
                </div>

                <div className="form-group ">
                  <label className="required">Email người gửi</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => handleOnchange(e, "sendNameEmail")}
                  ></input>
                </div>

                <div className="form-group ">
                  <label className="required">Pass SMTP</label>
                  <input
                    type="password"
                    className="form-control"
                    onChange={(e) => handleOnchange(e, "passSMTP")}
                  ></input>
                </div>

                <div className="form-group ">
                  <label className="required">Tiêu đề</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => handleOnchange(e, "title")}
                  ></input>
                </div>

                <div className="form-group " style={{ marginTop: 20 }}>
                  <label className="required">Nội dung</label>
                  <textarea
                    type="text"
                    className="form-control "
                    onChange={(e) => handleOnchange(e, "content")}
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
              onClick={handleOnSend}
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
