// // import "./datable.scss";
// import { DataGrid } from "@mui/x-data-grid";
// import { Link } from "react-router-dom";
// import { useState } from "react";
// import { supabase } from '../client';
// import { useEffect } from "react";

// const TypeBook = () => {

//   const [data, setData] = useState([]);
//   const [post, setPost] = useState({ Nameplantlist: "" })
//   const { Nameplantlist } = post

//   const [open, setOpen] = useState(false)

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };
//   const [product, setProduct] = useState([]);
//   useEffect(() => {
//     planlist()
//     create()

//   }, [])
//   function create(data,callBack)
//   {
//     var option = {
//       method: 'POST',
//       body: JSON.stringify(data)
//     };
//     fetch('/api/Products',option)
//     .then(response => response.json())
//     .then(data => setProduct(data))
//     .catch(error => console.log('error', error));
//   }
//   const planlist = async () => {
//     const { data } = await supabase
//       .from("Plantlist")
//       .select('*')
//     console.log(data)
//     setData(data)
//   }
//   // const getMerchants = () => {
//   //   return new Promise(function(resolve, reject) {
//   //     pool.query('SELECT * FROM merchants ORDER BY id ASC', (error, results) => {
//   //       if (error) {
//   //         reject(error)
//   //       }
//   //       console.log(results)
//   //       //resolve(results.rows);
//   //     })
//   //   })
//   // }
//   async function createPost() {
//     const { error } = await supabase
//       .from('Plantlist')
//       .insert([{Nameplantlist}])
//       .single()

//     setPost({Nameplantlist})
//     planlist()
//     if (error) {
//       console.log("Lỗi")
//       alert("Thêm không thành công !")
//       return
//     }
//     alert("Thêm thành công !")

//   }

//   const remove = async (id) => {
//     const { error } = await supabase
//       .from('Plantlist')
//       .delete()
//       .match({ Idplantlist: id })

//     if (error) {
//       console.log("lỗi", error)
//       alert("Không thể xóa lỗi khóa ngoại ! ")
//       return
//     }
//     planlist()
//   }

//   const rows = data.map((post) => ({
//     id: post.Idplantlist,
//     Nameplantlist: post.Nameplantlist
//   }));

//   const Columns = [

//     { field: 'id', headerName: "ID", width: 70, height: 100 },
//     { field: 'Nameplantlist', headerName: "Tên loại cây", width: 400, editable: true }];

//   const actionColumn = [
//     {
//       field: "action",
//       headerName: "Action",
//       width: 200,
//       renderCell: (params) => {
//         return (
//           <div className="cellAction">
//             <Link to="/users/test" style={{ textDecoration: "none" }}>
//               <div className="viewButton">View</div>
//             </Link>
//             <div
//               className="deleteButton"
//               onClick={() => { if (window.confirm("Bạn có muốn xóa không")) remove(params.row.id) }}
//             >
//               Delete
//             </div>
//           </div>
//         );
//       },
//     },
//   ];
//   return (
//     <form>
//       <div className="Table">
//         <div className="TableTitle">
//           Thể loại sách
//           <div className='col-sm-4'>
//             <div className="form-group ">
//               <input type="text" className="form-control "
//                 value={Nameplantlist}
//                 onChange={e => setPost({ ...post, Nameplantlist: e.target.value })}></input>
//             </div>
//           </div>
//           <div>
//             <button onClick={createPost} className='link' style={{ marginLeft: 50 }}>Thêm</button>
//           </div>
//         </div>
//         <DataGrid
//           className="datagrid"
//           rows={rows}
//           columns={Columns.concat(actionColumn)}
//           pageSize={9}
//           rowsPerPageOptions={[9]}
//           checkboxSelection
//         />

//       </div>
//     </form>
//   );
// };

// export default TypeBook;
