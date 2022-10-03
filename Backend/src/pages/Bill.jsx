// import "./datable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useState } from "react";
import { supabase } from '../client';
import { useEffect } from "react";
import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/navbar/Navbar";
const Author = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        author();
    }, [])

    function author() {
        var requestOptions = {
          method: 'GET',
          redirect: 'follow'
        };
        fetch('/api/order',requestOptions)
          .then(response => response.json())
          .then(data => setData(data)) 
          .catch(error => console.log('error', error));
    }
    // const remove = async (id) => {
    //     const { error } = await supabase
    //         .from('BookType')
    //         .delete()
    //         .match({ IdAuthor: id })

    //     if (error) {
    //         console.log("lỗi")
    //         alert("Không thể xóa lỗi khóa ngoại ! ")
    //         return
    //     }

        // author()
    // }

    const rows = data.map((post) => ({
        id: post.id,
        productName: post.productName,
        total: post.total,
        date: post.date,
        username: post.userName
        // Hometown: post.Hometown
    }));

    const Columns = [

        { field: 'id', headerName: "Mã đơn hàng", width: 120, height: 100 },
        { field: 'productName', headerName: "Tên sản phẩm", width: 200, editable: true },
        { field: 'total', headerName: "Tổng tiền", width: 180, editable: true },
         { field: 'date', headerName: "Ngay mua hang", width: 200, editable: true },
         { field: 'username', headerName: "Ten nguoi mua hang", width: 200, editable: true }];
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
                        <Link to="/ " style={{ textDecoration: "none" }}>
                            <div className="viewButton">Đang xử lí</div>
                        </Link>
                        {/* <div
                            className="deleteButton"
                            // onClick={() => { if (window.confirm("Bạn có muốn xóa không")) remove(params.row.id) }}
                        >
                            Delete
                        </div> */}
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
            </div>
        </div>
    );
};

export default Author;
