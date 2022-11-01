import React from "react";
import "../body/css/Introduce1.css";
import { useEffect, useState } from "react";
export default function Introduce1() {
  const [conten, setConten] = useState([]);
  useEffect(() => {
    fetchData(14);
  }, []);
  function fetchData(id) {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    //  /get-conten-by-id?id=${id}
    fetch(`/api/conten/get-conten-by-id?id=${id}`, requestOptions)
      .then((response) => response.json())
      .then((data) => setConten(data))
      .catch((error) => console.log("error", error));
  }
  return (
    <div>
      <div className="gioithieu1">
        <div className="anhgioithieu1">
          <div className="anhgtbohoa">
            <img className="anhgtbohoa1" src="image/bohoa.png " />
          </div>
        </div>
        <div className="contengioithieu1">
          <img src="image/nam.png " />
          <h2>{conten.nameConten}</h2>
          <p>{conten.pharagraph}</p>
          <button>READ MORE</button>
        </div>
      </div>
      <img
        className="gioithieu1hoa"
        src="image/Leaf7.png "
        style={{ position: "absolute", right: 0, marginTop: "-3rem" }}
      />
      <div className="gioithieu2">
        <div className="contengioithieu2">
          <img className="iconhoa1" src="image/nam.png " />
          <h2>
            We take care
            <br />
            of the details
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur
            <br />
            adipisicing elit, sed do eiusmod tempor
            <br />
            incididunt ut labore et dolore magna.
          </p>
          <button>READ MORE</button>
        </div>
        <div className="anhgioithieu2">
          <div className="anhgt2-1">
            <img src="image/cathoa.png " />
          </div>
        </div>
      </div>{" "}
      <img
        className="imggt2"
        src="image/Leaf8.png "
        style={{ position: "absolute", left: 0 }}
      />
      <div className="gioithieu3">
        <div className="anhgioithieu1">
          <div className="anhgt3-1">
            <img src="image/ngamhoa.png " />
          </div>
        </div>
        <div className="contengioithieu1">
          <img className="iconhoa2" src="image/nam.png " />
          <h2>
            We love what
            <br />
            we do
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur
            <br /> adipisicing elit, sed do eiusmod tempor
            <br /> incididunt ut labore et dolore magna.
          </p>
          <button>READ MORE</button>
        </div>
      </div>
      <img
        className="hoa3"
        src="image/Leaf7.png "
        style={{ position: "absolute", right: 0, marginTop: "-5rem" }}
      />
    </div>
  );
}
