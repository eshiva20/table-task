import React from "react";
import "./Box.css"
import SizeBox from "../sizeBox/SizeBox";

const Box1 = ({radioValue,setRadioValue}) => {
  return (
    <div
      style={{
        backgroundColor: radioValue === 1 ? "#F4FBF9" : "transparent",
      }}
      className="box1"
    >
      <div className="innerBox1">
        <div className="innerBox">
          <input
            checked={radioValue === 1}
            onChange={() => setRadioValue(1)}
            type="radio"
            value={1}
          />
          <div className="innerBox-text">
            <span className="pair">1 Pair</span>
            <span className="price">DKK 195.00</span>
          </div>
        </div>
        <div className="offer">50% OFF</div>
      </div>
      {radioValue == 1 && <SizeBox />}
    </div>
  );
};

export default Box1;
