import React from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useEffect, useState, useRef } from "react";
export default function Search() {
  const [conten, setConten] = useState([]);
  const post_name = useRef(null);
  //   useEffect(() => {
  //     fetchData(post_name);
  //   }, []);
  // function fetchData(nameproduct) {
  //   var requestOptions = {
  //     method: "GET",
  //     redirect: "follow",
  //   };
  //   //  /get-conten-by-id?id=${id}
  //   fetch(`/api/conten/get-by-id?nameproduct=${nameproduct}`, requestOptions)
  //     .then((response) => response.json())
  //     .then((data) => setConten(data))
  //     .catch((error) => console.log("error", error));
  // }
  return (
    <div>
      <form method="post" action="/api/order/get-by-id/fullname=">
        <input type="text" asp-for="fullname" placeholder="Search..." />
        <input type="submit" value="Filter"></input>
        <SearchOutlinedIcon />
      </form>
    </div>
  );
}
