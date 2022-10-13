import React, { useState } from "react";
import "../body/css/Forminput.css";
export default function Forminput() {
  const [form, setForm] = useState({
    name: "",
    email: " ",
    mess: "",
  });

  const handleNameInput = () => {};
  const handlMailInput = (e) => {
    setForm({ ...form, [e.target.email]: e.target.value });
    console.log(form.email);
  };

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
          <input
            type="text"
            name="Your Name"
            value={form.name}
            placeholder="Your Name"
          />
          <input
            type="text"
            placeholder="Mail"
            value={form.email}
            onChange={(e) => handlMailInput(e)}
          />
          <textarea placeholder="Messages" value={form.mess} />
        </form>
        <button>SEND MESSAGE</button>
      </div>
    </div>
  );
}
