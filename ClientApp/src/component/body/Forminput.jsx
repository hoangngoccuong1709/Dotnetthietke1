import React, { useState } from "react";
import "../body/css/Forminput.css";
import { addNewSub } from "../../actions/Subcribe";
import { useDispatch } from "react-redux";
export default function Forminput() {
  const [display, setDisplay] = useState(false);

  const dispatch = useDispatch();

  const formatDate = (date) => {
    var year = date.getFullYear().toString();
    var month = (date.getMonth() + 101).toString().substring(1);
    var day = (date.getDate() + 100).toString().substring(1);
    var hours = (date.getHours() + 100).toString().substring(1);
    var min = (date.getMinutes() + 100).toString().substring(1);
    var sec = (date.getSeconds() + 100).toString().substring(1);
    return year + "-" + month + "-" + day + " " + hours + ":" + min + ":" + sec;
  };

  const date = formatDate(new Date());

  const [input, setInput] = useState({
    name: "",
    email: "",
    message: "",
    createAt: date,
  });

  const handleOnchange = (e, id) => {
    //good code :))
    let copystate = { ...input };
    copystate[id] = e.target.value;
    setInput({
      ...copystate,
    });
  };

  const checkValidateEmail = () => {
    let x = input.email;
    let atPosition = x.indexOf("@");
    let dotPosition = x.lastIndexOf(".");
    if (
      atPosition < 1 ||
      dotPosition < atPosition + 2 ||
      dotPosition + 2 >= x.length
    ) {
      alert("Please enter a valid e-mail address.");
      return false;
    }
    return true;
  };

  const checkValidateInput = () => {
    let isValidate = true;

    let arr = ["name", "email", "message"];
    for (let i = 0; i < arr.length; i++) {
      //   console.log(this.state[arr[i]]);
      if (!input[arr[i]]) {
        alert("missing perameter " + arr[i]);
        isValidate = false;
        break;
      }
    }

    return isValidate;
  };

  const handleSubmit = async (e) => {
    const createdb = new Promise((resole, reject) => {
      try {
        let isValidate = checkValidateInput();
        let isValidateEmail = checkValidateEmail();
        if (isValidateEmail == true) {
          if (isValidate == true) {
            dispatch(addNewSub(input));
            setDisplay(true);
            resole(createdb);
          }
        }
        setDisplay(false);
      } catch (e) {
        reject(e);
      }
    });
    setInput({
      name: "",
      email: "",
      message: "",
    });

    // setDisplay(!display);
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
      {display === true && (
        <p style={{ color: "red" }} className="mt-3">
          Đăng ký thành công!
        </p>
      )}
      {display === false && (
        <div className="form">
          <form id="form-input">
            <input
              value={input.name}
              type="text"
              name="Your Name"
              placeholder="Your Name"
              onChange={(e) => handleOnchange(e, "name")}
            />
            <input
              value={input.email}
              type="text"
              placeholder="Mail"
              onChange={(e) => handleOnchange(e, "email")}
            />
            <textarea
              value={input.message}
              type="text"
              placeholder="Messages"
              onChange={(e) => handleOnchange(e, "message")}
            />
          </form>
          <button onClick={handleSubmit}>SEND MESSAGE</button>
        </div>
      )}
    </div>
  );
}
