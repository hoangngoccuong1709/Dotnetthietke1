import React from "react";
import Slide from "../../component/body/Slide";
import Saleoff from "../../component/body/Saleoff";
import Sale from "../../component/body/Sale";
import Titleproduct from "../../component/body/Titleproduct";
import Video from "../../component/body/Video";
import Introduce1 from "../../component/body/Introduce1";
import Forminput from "../../component/body/Forminput";
import "../../App.css";

export default function Home() {
  return (
    <div>
      <Slide />
      <Sale />
      <Titleproduct />
      <Video />
      <Saleoff />
      <Introduce1 />
      <Forminput />
    </div>
  );
}
