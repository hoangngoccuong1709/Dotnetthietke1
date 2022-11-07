import React, { useState } from "react";
import "./SettingPage.scss";
import { CirclePicker } from "react-color";
import reactCSS from "reactcss";

export default function SettingPage() {
  const [status, setStatus] = useState(false);
  const [color, setColors] = useState("#3333");
  const handleClick = () => {
    setStatus(!status);
  };
  return (
    <div>
      <div className="containerST">
        <div className="BodyST">
          <div className="TitleST">
            <h3> Header Setting:</h3>
            <div className="ContentST">
              <p>Background Color:</p>
              <div>
                <div onClick={handleClick} style={{ cursor: "pointer" }}>
                  click
                  <div />
                </div>
                {status ? (
                  <div>
                    <div />
                    <CirclePicker
                      color={color}
                      onChangeComplete={(color) => {
                        setColors(color.hex);
                      }}
                    />
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
