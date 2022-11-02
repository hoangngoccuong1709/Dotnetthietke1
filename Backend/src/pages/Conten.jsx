// import "./datable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useEffect } from "react";
import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/navbar/Navbar";
import "../components/datatable/datatable.scss";
const IdConten = () => {
  const baseURL = "/api";
  const post_name = useRef(null);
  const post_title = useRef(null);
  const post_paragraph = useRef(null);
  const post_posion = useRef(null);
  const post_imageconten = useRef(null);
  const [postResult, setPostResult] = useState(null);
  const fortmatResponse = (res) => {
    return JSON.stringify(res, null, 2);
  };
  const [image, setImage] = useState();
  const [data, setData] = useState([]);
  const [post, setPost] = useState({
    idconten: "",
    nameConten: "",
    title: "",
    pharagraph: "",
    posion: "",
  });
  const { idconten, nameConten, title, pharagraph, posion } = post;

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
    fetch("/api/conten", requestOptions)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.log("error", error));
    // const { data } = await fetch('/api/conten')
    // console.log(data)
    // setData(data)
  }
  async function createPost() {
    const postData = {
      nameConten: post_name.current.value,
      title: post_title.current.value,
      paragraph: post_paragraph.current.value,
      posion: post_posion.current.value,
      imageconten: image.name,
    };
    //   try {
    fetch(`${baseURL}/conten/by-id`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": "token-value",
      },
      body: JSON.stringify(postData),
    })
      .then((res) => {
        if (res.ok) {
          console.log("HTTP request successful");
        } else {
          console.log("HTTP request unsuccessful");
        }
        return res;
      })
      .then((res) => res.json());
    //.then(data => setData(data))
    alert("Thêm thành công !");
    publish().catch((error) => console.log(error));
  }

  const remove = async (id) => {
    const { error } = await fetch(`${baseURL}/conten/${id}`, {
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
    id: post.idconten,
    nameConten: post.nameConten,
    title: post.title,
    pharagraph: post.paragraph,
    posion: post.posion,
    imageconten: post.imageconten,
  }));

  const Columns = [
    { field: "id", headerName: "ID", width: 70, height: 100 },
    {
      field: "nameConten",
      headerName: "Tên bài viết",
      width: 200,
      editable: true,
    },
    {
      field: "title",
      headerName: "Tiêu đề bài viết",
      width: 200,
      editable: true,
    },
    {
      field: "pharagraph",
      headerName: "Nội dung bài viết",
      width: 300,
      editable: true,
    },
    {
      field: "posion",
      headerName: "Vị trí bài viết",
      width: 100,
      editable: true,
    },
    {
      field: "imageconten",
      headerName: "Hình ảnh bài viết",
      width: 100,
      editable: true,
    },
  ];

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 100,
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
            Quản lí bài viết
            <button onClick={handleClickOpen} className="link">
              Thêm mới
            </button>
          </div>
          <DataGrid
            className="datagrid"
            autoHeight
            autoPageSize
            key={post.id}
            rows={rows}
            columns={Columns.concat(actionColumn)}
            pageSize={9}
            rowsPerPageOptions={[9]}
            checkboxSelection
          />
        </div>
        <div>
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Thêm bài viết</DialogTitle>
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
                      <div className="row">
                        <div>
                          <div className="form-group ">
                            <label className="required">
                              Nhập tên bài viết
                            </label>
                            <input
                              type="text"
                              className="form-control "
                              ref={post_name}
                              required
                              pattern="\S+"
                            ></input>
                          </div>

                          <div
                            className="form-group "
                            style={{ marginTop: 20 }}
                          >
                            <label className="required">
                              Nhập tiêu đề bài viết{" "}
                            </label>
                            <input
                              type="text"
                              className="form-control "
                              ref={post_title}
                              required
                              pattern="\S+"
                            ></input>
                          </div>

                          <div
                            className="form-group "
                            style={{ marginTop: 20 }}
                          >
                            <label className="required">
                              Nhập nội dung bài viết
                            </label>
                            <input
                              type="text"
                              className="form-control "
                              ref={post_paragraph}
                              required
                              pattern="\S+"
                            ></input>
                          </div>
                          <select
                            id="cars"
                            style={{ marginTop: 20 }}
                            ref={post_posion}
                          >
                            <option value="Slidetop">Slidetop</option>
                            <option value="Bodytop">Bodytop</option>
                            <option value="Bodybetween">Bodybetween</option>
                            <option value="Bodypading">Bodypading</option>
                          </select>
                          {/* <div
                            className="form-group "
                            style={{ marginTop: 20 }}
                          >
                            <label className="required">
                              Nhập hình ảnh bài viết
                            </label>
                            <input
                              type="text"
                              className="form-control "
                              ref={post_imageconten}
                              required
                              pattern="\S+"
                            ></input>
                          </div> */}
                        </div>
                      </div>
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

export default IdConten;
