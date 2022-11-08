// import "./datable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useState } from "react";
import { supabase } from "../client";
import { useEffect } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/navbar/Navbar";
import Search from "../components/navbar/Search";
const Author = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    author();
  }, []);
  const [openEdit, setOpenEdit] = useState(false);

  const handleClickOpenEdit = () => {
    setOpenEdit(!openEdit);
  };

  function author() {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    fetch("/api/order", requestOptions)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.log("error", error));
  }
  const handleUpdate = (params) => {
    setOpenEdit(!openEdit);
    setData({
      id: post.id,
      productName: post.nameproduct,
      quantity: post.quantity,
      Orderid: post.orderid,
      total: post.total,
      fullname: post.fullname,
      Description: post.adress,
      date: post.date,
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
  const handleOnchange = (e, id) => {
    let copystate = { ...data };
    copystate[id] = e.target.value;
    setData({
      ...copystate,
    });
  };
  const rows = data.map((post) => ({
    id: post.id,
    productName: post.nameproduct,
    quantity: post.quantity,
    Orderid: post.orderid,
    total: post.total,
    fullname: post.fullname,
    Description: post.adress,
    date: post.date,
    // Hometown: post.Hometown
  }));

  const Columns = [
    { field: "id", headerName: "Mã Hoá đơn", width: 120, height: 100 },
    {
      field: "productName",
      headerName: "Tên sản phẩm",
      width: 200,
      editable: true,
    },
    { field: "quantity", headerName: "So luong", width: 180, editable: true },
    { field: "total", headerName: "Tổng tiền", width: 180, editable: true },
    {
      field: "fullname",
      headerName: "Ho va ten nguoi mua",
      width: 180,
      editable: true,
    },
    { field: "Description", headerName: "Dia chi", width: 180, editable: true },
    {
      field: "Orderid",
      headerName: "Mã đơn hàng",
      width: 100,
      editable: true,
    },
    { field: "date", headerName: "Ngay mua hang", width: 200, editable: true },
    // {
    //   field: "username",
    //   headerName: "Ten nguoi mua hang",
    //   width: 200,
    //   editable: true,
    // },
  ];
  // { field: 'year', headerName: "Tổng tiền", width: 100, editable: true }];
  // // { field: 'Hometown', headerName: "Quê quán", width: 400, editable: true }];

  const actionColumn = [
    {
      field: "action",
      headerName: "Tình trạng",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="xuli" style={{ textDecoration: "none" }}>
              <div className="viewButton">Đang xử lí</div>
            </Link>
            {/* <div
                            className="deleteButton"
                            // onClick={() => { if (window.confirm("Bạn có muốn xóa không")) remove(params.row.id) }}
                        >
                            Delete
                        </div> */}
            <button
              className="btn btn-primary ml-3"
              onClick={() => handleUpdate(params.row)}
              // onClick={() => console.log(params)}
            >
              edit
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
          <div className="TableTitle">
            Quản lí đơn hàng
            {/* <Link to="/users/new" className="link">
                            Thêm mới
                        </Link> */}
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
        </div>
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
      </div>
    </div>
  );
};

export default Author;
