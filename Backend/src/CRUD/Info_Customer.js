import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getList } from "../kAcctions/Subcribe";
import { Link } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/navbar/Navbar";
import { DataGrid } from "@mui/x-data-grid";
import "./Info_Customer.scss";
const SubscribePage = () => {
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
            <button className="btn btn-primary ml-3 ">add</button>
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
        </div>
      </div>
    </div>
  );
};

export default SubscribePage;
