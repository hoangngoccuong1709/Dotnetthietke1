import React, { useEffect, useRef, useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions, {
  dialogActionsClasses,
} from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import { useDispatch, useSelector } from "react-redux";
import {
  getList,
  addNewSub,
  removeSub,
  updateSub,
} from "../kAcctions/Subcribe";
import { DataGrid } from "@mui/x-data-grid";
import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/navbar/Navbar";

const SubscribePage = () => {
  const nameInput = useRef(null);
  const emailInput = useRef(null);
  const messageInput = useRef(null);

  const dispatch = useDispatch();
  const [data, setData] = useState({
    id: "",
    name: "",
    email: "",
    message: "",
    updateAt: "",
  });

  const subscribe = useSelector((state) => state.Subscribe);

  useEffect(() => {
    getAllSubscribeFormReact();
  }, []);

  const getAllSubscribeFormReact = async () => {
    await Promise.all([dispatch(getList())]);
  };

  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(!open);
  };

  const [openEdit, setOpenEdit] = useState(false);

  const handleClickOpenEdit = () => {
    setOpenEdit(!openEdit);
  };

  //TODO: chuyển time lên backend c#
  const formatDate = (date) => {
    var year = date.getFullYear().toString();
    var month = (date.getMonth() + 101).toString().substring(1);
    var day = (date.getDate() + 100).toString().substring(1);
    var hours = (date.getHours() + 100).toString().substring(1);
    var min = (date.getMinutes() + 100).toString().substring(1);
    var sec = (date.getSeconds() + 100).toString().substring(1);
    return year + "-" + month + "-" + day + " " + hours + ":" + min + ":" + sec;
  };

  const date = formatDate(new Date());

  //TODO: set các điều kiện if else
  //chưa tối ưu
  const handleCreate = async () => {
    const listData = {
      name: nameInput.current.value,
      email: emailInput.current.value,
      message: messageInput.current.value,
      createAt: date,
    };
    const createdb = new Promise((resole, reject) => {
      try {
        dispatch(addNewSub(listData));
        resole(createdb);
      } catch (e) {
        reject(e);
      }
    });

    alert("add success!");
    setOpen(!open);
  };

  const handleUpdate = (params) => {
    setOpenEdit(!openEdit);
    setData({
      id: params.id,
      name: params.name,
      email: params.email,
      message: params.message,
      updateAt: date,
    });
  };

  const handleSave = async (id) => {
    id = data.id;
    const updatedb = new Promise((resolve, reject) => {
      try {
        dispatch(updateSub(id, data));
        resolve(updatedb);
      } catch (e) {
        reject(e);
      }
    });
    alert("update success");
    setOpenEdit(!openEdit);
    getAllSubscribeFormReact();
  };

  //TODO: chưa tối hưu hiệu năng khi state thay đổi bị render lại
  const handleOnchange = (e, id) => {
    let copystate = { ...data };
    copystate[id] = e.target.value;
    setData({
      ...copystate,
    });
  };

  const rows = subscribe.list?.map((post) => ({
    id: post.id,
    name: post.name,
    email: post.email,
    message: post.message,
    createAt: post.createAt,
    updateAt: post.updateAt,
  }));

  const Columns = [
    { field: "id", headerName: "#", width: 50, hide: true },
    { field: "name", headerName: "Customer Name", width: 200, editable: true },
    { field: "email", headerName: "Email", width: 180, editable: true },
    { field: "message", headerName: "Message", width: 200, editable: true },
    {
      field: "createAt",
      headerName: "Create At",
      width: 200,
      editable: true,
    },
    {
      field: "updateAt",
      headerName: "Update At",
      width: 200,
      editable: true,
    },
  ];

  const actionColumn = [
    {
      field: "action",
      headerName: "Status",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <button
              className="btn btn-primary ml-3"
              onClick={() => handleUpdate(params.row)}
            >
              edit
            </button>

            <button
              onClick={() => {
                //TODO: try catch
                if (window.confirm("Bạn có muốn xóa không")) {
                  dispatch(removeSub(params.row.id));
                  alert("delete success");
                  getAllSubscribeFormReact();
                }
              }}
              className="btn btn-danger ml-3"
            >
              delete
            </button>
          </div>
        );
      },
    },
  ];

  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="Table">
          <div className="text-center mt-3 mb-3  bg-primary h2">
            Subscribe Manager
          </div>
          <div className="d-flex flex-row mb-3">
            <button className="btn btn-primary ml-3 " onClick={handleClickOpen}>
              add
            </button>
            <button className="btn btn-primary ml-3 ">Send Email</button>
            <button className="btn btn-primary ml-3">Export Excel</button>
          </div>

          <DataGrid
            className="datagrid"
            autoHeight
            autoPageSize
            rows={rows}
            columns={Columns.concat(actionColumn)}
            pageSize={9}
            rowsPerPageOptions={[9]}
            getRowId={(row) => row.id}
          />

          <Dialog
            open={openEdit}
            onClose={handleClickOpenEdit}
            PaperProps={{
              style: {
                width: "100%",
              },
            }}
          >
            <DialogTitle>Edit Subscribe</DialogTitle>

            <DialogContent>
              <form>
                <div className="row">
                  <div>
                    <div className="form-group ">
                      <label className="required">Name</label>
                      <input
                        type="text"
                        className="form-control"
                        value={data.name || ""}
                        onChange={(e) => handleOnchange(e, "name")}
                      ></input>
                    </div>

                    <div className="form-group " style={{ marginTop: 20 }}>
                      <label className="required">Email</label>
                      <input
                        type="text"
                        className="form-control "
                        value={data.email || ""}
                        onChange={(e) => handleOnchange(e, "email")}
                      ></input>
                    </div>

                    <div className="form-group " style={{ marginTop: 20 }}>
                      <label className="required">Message</label>
                      <textarea
                        onChange={(e) => handleOnchange(e, "message")}
                        value={data.message || ""}
                        type="text"
                        className="form-control "
                        style={{
                          height: "100px",
                        }}
                      ></textarea>
                    </div>
                  </div>
                </div>
              </form>
              ;
            </DialogContent>

            <DialogActions>
              <div className="button">
                <button
                  type="reset"
                  value="Reset"
                  className="btn btn-primary text-center"
                  onClick={handleSave}
                >
                  save
                </button>
                <button
                  onClick={handleClickOpenEdit}
                  className="btn btn-danger"
                  type="reset"
                  value="Reset"
                  style={{ marginLeft: 20 }}
                >
                  Cancel
                </button>
              </div>
            </DialogActions>
          </Dialog>

          <Dialog
            open={open}
            onClose={handleClickOpen}
            PaperProps={{
              style: {
                width: "100%",
              },
            }}
          >
            <DialogTitle>Add Subscribe</DialogTitle>

            <DialogContent>
              <form>
                <div className="row">
                  <div>
                    <div className="form-group ">
                      <label className="required">Name</label>
                      <input
                        type="text"
                        className="form-control "
                        ref={nameInput}
                      ></input>
                    </div>

                    <div className="form-group " style={{ marginTop: 20 }}>
                      <label className="required">Email</label>
                      <input
                        type="text"
                        className="form-control "
                        ref={emailInput}
                      ></input>
                    </div>

                    <div className="form-group " style={{ marginTop: 20 }}>
                      <label className="required">Message</label>
                      <textarea
                        type="text"
                        className="form-control "
                        style={{
                          height: "100px",
                        }}
                        ref={messageInput}
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
                  onClick={handleCreate}
                >
                  Add
                </button>
                <button
                  onClick={handleClickOpen}
                  className="btn btn-danger"
                  type="reset"
                  value="Reset"
                  style={{ marginLeft: 20 }}
                >
                  Cancel
                </button>
              </div>
            </DialogActions>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default SubscribePage;
