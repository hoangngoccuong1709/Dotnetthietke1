import React from "react";
import React, { useState } from "react";
import "../body/css/Forminput.css";
export default function Forminput() {
  return (
    <div className="thongtin">
      <h2>
        Subscribe to our
        <br />
        newsletter
      </h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        <br /> tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div className="form">
        <form>
          <input type="text" name="Your Name" placeholder="Your Name" />
          <input type="text" placeholder="Mail" />
          <textarea placeholder="Messages" defaultValue={""} />
        </form>
        <button>SEND MESSAGE</button>
      </div>
    </div>
  );
}
