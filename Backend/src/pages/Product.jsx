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
import "../components/datatable/datatable.scss";
import { EditText, EditTextarea } from "react-edit-text";
import Search from "../components/navbar/Search";
import { filterByNames } from "./action/filter";
const IdProduct = () => {
  const baseURL = "/api";
  const post_name = useRef(null);
  const post_title = useRef(null);
  // const post_image = useRef(null);
  const post_price = useRef(null);
  const [postResult, setPostResult] = useState(null);
  const fortmatResponse = (res) => {
    return JSON.stringify(res, null, 2);
  };

  const [image, setImage] = useState();
  const [data, setData] = useState([]);
  const [post, setPost] = useState({
    idproduct: "",
    nameProduct: "",
    title: "",
    price: "",
  });
  const { idproduct, nameProduct, title, price } = post;

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
      image: image.name,
      price: post_price.current.value,
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
      alert("Th??m th??nh c??ng !");
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
      console.log("l???i");
      alert("Kh??ng th??? x??a l???i kh??a ngo???i ! ");
      return;
    }

    publish();
  };

  const rows = data.map((post) => ({
    id: post.idproduct,
    nameProduct: post.nameProduct,
    title: post.title,
    price: post.price,
    image: post.image,
  }));

  const Columns = [
    { field: "id", headerName: "ID", width: 70, height: 100 },
    {
      field: "nameProduct",
      headerName: "T??n s???n ph???m",
      width: 150,
      editable: true,
    },
    {
      field: "title",
      headerName: "Ti??u ????? s???n ph???m",
      width: 150,
      editable: true,
    },
    { field: "price", headerName: "Gi?? s???n ph???m", width: 150, editable: true },
    {
      field: "image",
      headerName: "H??nh ???nh s???n ph???m",
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
                if (window.confirm("B???n c?? mu???n x??a kh??ng"))
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
  const [value, setValue] = useState("");

  const onChangeHandler = (event) => {
    const { target } = event;
    const val = target.value;
    setValue(val);
  };
  // const sumData = () => {
  //   const filterName = value.filter((el) => el.nameproduct == onChangeHandler);
  // };
  const results = !value ? data : filterByNames(data, value);
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="Table">
          {/* <div className="demo">
            <input type="text" value={value} onChange={onChangeHandler} />
            <div className="demo-result">{publish(results)}</div>
          </div> */}
          <div className="TableTitle">
            Qu???n l?? s???n ph???m
            <button onClick={handleClickOpen} className="link">
              Th??m m???i
            </button>
          </div>
          {/* <div className="search">
            <Search />
          </div> */}
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
            <DialogTitle>Th??m s???n ph???m</DialogTitle>
            <DialogContent>
              <form>
                <div className="row">
                  <div className="bottom">
                    <div className="left">
                      <img
                        src={
                          image
                            ? URL.createObjectURL(image)
                            : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                        }
                        alt=""
                      />
                    </div>
                    <div className="right">
                      <form>
                        <div className="formInput">
                          <label htmlFor="file">
                            Image:{" "}
                            <DriveFolderUploadOutlinedIcon className="icon" />
                          </label>
                          <input
                            type="file"
                            id="file"
                            onChange={(e) => setImage(e.target.files[0])}
                            style={{ display: "none" }}
                          />
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="form-group ">
                        <label className="required">Nh???p t??n s???n ph???m</label>
                        <input
                          type="text"
                          className="form-control "
                          ref={post_name}
                        ></input>
                      </div>

                      <div className="form-group " style={{ marginTop: 20 }}>
                        <label className="required">
                          Nh???p ti??u ????? s???n ph???m : {}
                        </label>
                        <EditTextarea
                          type="textarea"
                          className="form-control "
                          ref={post_title}
                        ></EditTextarea>
                      </div>
                      <div className="form-group " style={{ marginTop: 20 }}>
                        <label className="required">Nh???p gi?? s???n ph???m</label>
                        <input
                          type="text"
                          className="form-control "
                          ref={post_price}
                        ></input>
                      </div>

                      {/* <div className="form-group " style={{ marginTop: 20 }}>
                        <label className="required">Nh???p image s???n ph???m</label>
                        <input
                          type="text"
                          className="form-control "
                          ref={post_image}
                        ></input>
                      </div> */}
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
                  Th??m
                </button>
                <button
                  onClick={() => setOpen(false)}
                  className="btn btn-danger"
                  type="reset"
                  value="Reset"
                  style={{ marginLeft: 20 }}
                >
                  ????ng
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
