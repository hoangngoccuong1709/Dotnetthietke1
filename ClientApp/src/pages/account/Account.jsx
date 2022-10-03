// import "./datable.scss";
import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import { useEffect } from "react";
const Account = () => {
    const post_name = useRef(null);
    const post_pass = useRef(null);
    // const fortmatResponse = (res) => {
    //   return JSON.stringify(res, null, 2)};
    const [data, setData] = useState([]);
    // const [post, setPost] = useState({ idconten: "", nameConten: "", title: "",pharagraph: "",posion: "",imageconten: "" });
    // const { idconten, nameConten, title,pharagraph,posion,imageconten } = post

    useEffect(() => {
        publish();
    }, [])
    async function publish() { 
       
        const postData = {
            nameuser: post_name.current.value,
            password: post_pass.current.value,

          };
          let result = await fetch(`/api/login`, {
            method: "post",
            headers: {
              "Content-Type": "application/json",
              "x-access-token": "token-value",
            },      
            body: JSON.stringify(postData),
          })
    //    .then(res => {
    //        if (res.ok) { console.log("HTTP request successful") }
    //        else { console.log("HTTP request unsuccessful") }
    //    return res
    //     })
    //    .then(res => res.json())
       //.then(data => setData(data))
       result = await result.json();
    //    localStorage.setItem

    }
    //    var requestOptions = {
    //             method: 'GET',
    //             redirect: 'follow',
    //             data: postData
    //         };
    //         fetch(`/api?username=${data}`,requestOptions)
    //         .then(requestOptions => {
    //          if (requestOptions.ok) { console.log("HTTP request successful") }
    //          else { console.log("HTTP request unsuccessful") }
    //         return requestOptions
    //         })
    //      .then(requestOptions => requestOptions.json())
    //     }
    return (
        <div>
            <h3> Login</h3>
            <div className="row" >
               <div>
                    <div className="form-group ">
                        <label className="required">Nhập tên</label>
                        <input type="text" className="form-control " ref={post_name} required pattern="\S+">
                        </input>
                     </div>

                    <div className="form-group " style={{ marginTop: 20 }}>
                        <label className="required">Nhập mật khẩu </label>
                        <input type="text" className="form-control " ref={post_pass} required pattern="\S+"></input>
                    </div>
                    <button onClick={publish} type="reset" value="Reset" className='btn btn-primary text-center'>Login</button>
                </div>
            </div>
        </div>
    )
}
export default Account;