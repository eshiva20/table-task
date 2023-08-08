import React from 'react'
import "./Box.css"
import SizeBox from "../sizeBox/SizeBox";

const Box3 = ({radioValue,setRadioValue}) => {
  return (
    <div
          style={{
            backgroundColor: radioValue === 3 ? "#F4FBF9" : "transparent",
          }}
          className="box1"
        >
          <div className="innerBox1">
            <div className="innerBox">
              <input
                checked={radioValue === 3}
                onChange={() => setRadioValue(3)}
                type="radio"
                value={3}
              />
              <div className="innerBox-text">
                <span className="pair">3 Pair</span>
                <span className="price">DKK 528.00</span>
              </div>
            </div>
            <div className="offer">60% OFF</div>
          </div>
          {radioValue == 3 && <SizeBox />}
        </div>
  )
}

export default Box3
