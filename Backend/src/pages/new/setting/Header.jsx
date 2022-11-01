import React from "react";

export default function Header({ handleSubmit }) {
  return (
    <div className="header">
      <button onClick={handleSubmit} className="addButton">
        {" "}
        add footer
      </button>
      <p>About</p>
      <p>What where do</p>
      <p>Your company</p>
    </div>
  );
}
