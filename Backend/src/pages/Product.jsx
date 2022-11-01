// import "./datable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import DialogTitle from "@mui/material/DialogTitle";
import { useEffect } from "react";
import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/navbar/Navbar";
const IdProduct = () => {
  const baseURL = "/api";
  const post_name = useRef(null);
  const post_title = useRef(null);
  const post_image = useRef(null);
  const post_price = useRef(null);
  const [postResult, setPostResult] = useState(null);
  const fortmatResponse = (res) => {
    return JSON.stringify(res, null, 2);
  };
  const [data, setData] = useState([]);
  const [post, setPost] = useState({
    idproduct: "",
    nameProduct: "",
    title: "",
    image: "",
    price: "",
  });
  const { idproduct, nameProduct, title, image, price } = post;

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    publish();
  }, []);
  function publish() {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    fetch("/api/product", requestOptions)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.log("error", error));
  }
  async function createPost() {
    const postData = {
      nameProduct: post_name.current.value,
      title: post_title.current.value,
      image: post_image.current.value,
      image: post_price.current.value,
    };
    try {
      const res = await fetch(`${baseURL}/product`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          "x-access-token": "token-value",
        },
        body: JSON.stringify(postData),
      });
      if (!res.ok) {
        const message = `An error has occured: ${res.status} - ${res.statusText}`;
        throw new Error(message);
      }
      const data = await res.json();
      const result = {
        status: res.status + "-" + res.statusText,
        headers: {
          "Content-Type": res.headers.get("Content-Type"),
          "Content-Length": res.headers.get("Content-Length"),
        },
        data: data,
      };
      alert("Thêm thành công !");
      setPostResult(fortmatResponse(result));
      publish();
    } catch (err) {
      setPostResult(err.message);
    }
  }

  const remove = async (id) => {
    const { error } = await fetch(`${baseURL}/product/${id}`, {
      method: "delete",
    });
    // const data = await res.json();
    //const { error } = await fetch('/api/conten/'${id})

    if (error) {
      console.log("lỗi");
      alert("Không thể xóa lỗi khóa ngoại ! ");
      return;
    }

    publish();
  };

  const rows = data.map((post) => ({
    id: post.idproduct,
    nameProduct: post.nameProduct,
    title: post.title,
    image: post.image,
    price: post.price,
  }));

  const Columns = [
    { field: "id", headerName: "ID", width: 70, height: 100 },
    {
      field: "nameProduct",
      headerName: "Tên sản phẩm",
      width: 150,
      editable: true,
    },
    {
      field: "title",
      headerName: "Tiêu đề sản phẩm",
      width: 150,
      editable: true,
    },
    { field: "price", headerName: "Giá sản phẩm", width: 150, editable: true },
    {
      field: "image",
      headerName: "Hình ảnh sản phẩm",
      width: 450,
      editable: true,
    },
  ];

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => {
                if (window.confirm("Bạn có muốn xóa không"))
                  remove(params.row.id);
              }}
            >
              Delete
            </div>
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
            Quản lí sản phẩm
            <button onClick={handleClickOpen} className="link">
              Thêm mới
            </button>
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
        <div>
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Thêm sản phẩm</DialogTitle>
            <DialogContent>
              <form>
                <div className="row">
                  <div>
                    <div className="form-group ">
                      <label className="required">Nhập tên sản phẩm</label>
                      <input
                        type="text"
                        className="form-control "
                        ref={post_name}
                      ></input>
                    </div>

                    <div className="form-group " style={{ marginTop: 20 }}>
                      <label className="required">Nhập tiêu đề sản phẩm </label>
                      <input
                        type="text"
                        className="form-control "
                        ref={post_title}
                      ></input>
                    </div>

                    <div className="form-group " style={{ marginTop: 20 }}>
                      <label className="required">Nhập image sản phẩm</label>
                      <input
                        type="text"
                        className="form-control "
                        ref={post_image}
                      ></input>
                    </div>
                    <div className="form-group " style={{ marginTop: 20 }}>
                      <label className="required">Nhập giá sản phẩm</label>
                      <input
                        type="text"
                        className="form-control "
                        ref={post_price}
                      ></input>
                    </div>
                  </div>
                </div>
              </form>
            </DialogContent>
            <DialogActions>
              <div className="button">
                <button
                  onClick={createPost}
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

export default IdProduct;
