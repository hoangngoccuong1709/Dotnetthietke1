import { useEffect, useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import { useDispatch, useSelector } from "react-redux";
import { getList } from "../kAcctions/Subcribe";
import { Link } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/navbar/Navbar";
import "./Info_Customer.scss";

const SubscribePage = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const dispatch = useDispatch();
  const subscribe = useSelector((state) => state.Subscribe);
  console.log("res", subscribe.list);
  useEffect(() => {
    console.log(getList);
    dispatch(getList());
  }, []);

  const rows = subscribe.list.map((post) => ({
    id: post.id,
    name: post.name,
    email: post.email,
    message: post.message,
    crateAt: post.createAt,
    updateAt: post.updateAt,
  }));

  const Columns = [
    { field: "id", headerName: "#", width: 50, height: 100 },
    { field: "name", headerName: "Tên khách hàng", width: 200, editable: true },
    { field: "email", headerName: "Email", width: 180, editable: true },
    { field: "message", headerName: "Message", width: 200, editable: true },
    {
      field: "createAt",
      headerName: "Thời gian nhập",
      width: 200,
      editable: true,
    },
    {
      field: "updateAt",
      headerName: "Thời gian sửa",
      width: 200,
      editable: true,
    },
  ];

  const actionColumn = [
    {
      field: "action",
      headerName: "Tình trạng",
      width: 200,
      renderCell: () => {
        return (
          <div className="cellAction">
            <Link to="/ " style={{ textDecoration: "none" }}>
              <div className="viewButton">New</div>
            </Link>
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
            Quản lý Subscribe
          </div>
          <div className="d-flex flex-row mb-3">
            <button className="btn btn-primary ml-3 " onClick={handleClickOpen}>
              add
            </button>
            <button className="btn btn-primary ml-3 ">edit</button>
            <button className="btn btn-danger ml-3">delete</button>
          </div>

          <DataGrid
            className="datagrid"
            autoHeight
            autoPageSize
            rows={rows}
            columns={Columns.concat(actionColumn)}
            pageSize={9}
            rowsPerPageOptions={[9]}
            checkboxSelection
          />

          <Dialog
            open={open}
            onClose={handleClose}
            PaperProps={{
              style: {
                width: "100%",
              },
            }}
          >
            <DialogTitle>Thêm Subscribe</DialogTitle>

            <DialogContent>
              <form>
                <div className="row ">
                  <div>
                    <div className="form-group ">
                      <label className="required">Name</label>
                      <input
                        type="text"
                        className="form-control "
                        // ref={post_name}
                      ></input>
                    </div>

                    <div className="form-group " style={{ marginTop: 20 }}>
                      <label className="required">Email</label>
                      <input
                        type="text"
                        className="form-control "
                        // ref={post_title}
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
                        // ref={post_image}
                      ></textarea>
                    </div>
                  </div>
                </div>
              </form>
            </DialogContent>

            <DialogActions>
              <div className="button">
                <button
                  // onClick={createPost}
                  type="reset"
                  value="Reset"
                  className="btn btn-primary text-center"
                >
                  Thêm
                </button>
                <button
                  onClick={() => setOpen(false)}
                  className="btn btn-danger"
                  type="reset"
                  value="Reset"
                  style={{ marginLeft: 20 }}
                >
                  Đóng
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
