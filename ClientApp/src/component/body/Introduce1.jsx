import React from "react";
import "../body/css/Introduce1.css";
import { useEffect, useState } from "react";
export default function Introduce1() {
  const [conten, setConten] = useState([]);
  const [conten1, setConten1] = useState([]);
  const [conten2, setConten2] = useState([]);
  useEffect(() => {
    fetchData("Bodytop");
    Bodybetwen("Bodybetween");
    Bodypading("Bodypading");
  }, []);
  function fetchData(posion) {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    //  /get-conten-by-id?id=${id}
    fetch(`/api/conten/get-conten-by-id?posion=${posion}`, requestOptions)
      .then((response) => response.json())
      .then((data) => setConten(data))
      .catch((error) => console.log("error", error));
  }
  function Bodybetwen(posion) {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    //  /get-conten-by-id?id=${id}
    fetch(`/api/conten/get-conten-by-id?posion=${posion}`, requestOptions)
      .then((response) => response.json())
      .then((data) => setConten1(data))
      .catch((error) => console.log("error", error));
  }
  function Bodypading(posion) {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    //  /get-conten-by-id?id=${id}
    fetch(`/api/conten/get-conten-by-id?posion=${posion}`, requestOptions)
      .then((response) => response.json())
      .then((data) => setConten2(data))
      .catch((error) => console.log("error", error));
  }
  return (
    <div>
      {conten.map((item) => {
        return (
          <div>
            <div className="gioithieu1">
              <div className="anhgioithieu1">
                <div className="anhgtbohoa">
                  {/* image/bohoa.png  */}
                  <img className="anhgtbohoa1" src={item.imageconten} />
                </div>
              </div>
              <div className="contengioithieu1">
                <img src="image/nam.png " />
                <h2>{item.nameConten}</h2>
                <p>{item.paragraph}</p>
                <button>READ MORE</button>
              </div>
            </div>
            <img
              className="gioithieu1hoa"
              src="image/Leaf7.png "
              style={{ position: "absolute", right: 0, marginTop: "-3rem" }}
            />
          </div>
        );
      })}

      <div>
        {conten1.map((item) => {
          return (
            <div className="gioithieu2">
              <div className="contengioithieu2">
                <img className="iconhoa1" src="image/nam.png " />
                <h2>{item.nameConten}</h2>
                <p>{item.paragraph}</p>
                <button>READ MORE</button>
              </div>
              <div className="anhgioithieu2">
                <div className="anhgt2-1">
                  <img src={item.imageconten} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <img
        className="imggt2"
        src="image/Leaf8.png "
        style={{ position: "absolute", left: 0 }}
      />
      <div>
        {conten2.map((item) => {
          return (
            <div className="gioithieu3">
              <div className="anhgioithieu1">
                <div className="anhgt3-1">
                  <img src={item.imageconten} />
                </div>
              </div>
              <div className="contengioithieu1">
                <img className="iconhoa2" src="image/nam.png " />
                <h2>{item.nameConten}</h2>
                <p>{item.paragraph}</p>
                <button>READ MORE</button>
              </div>
            </div>
          );
        })}
      </div>
      <img
        className="hoa3"
        src="image/Leaf7.png "
        style={{ position: "absolute", right: 0, marginTop: "-5rem" }}
      />
    </div>
  );
}
