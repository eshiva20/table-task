import React from 'react'
import "./Box.css"
import SizeBox from "../sizeBox/SizeBox";

const Box2 = ({radioValue,setRadioValue}) => {
  return (
    <div
          style={{
            backgroundColor: radioValue === 2 ? "#F4FBF9" : "transparent",
          }}
          className="box1"
        >
          <div className="innerBox1">
            <div className="innerBox">
              <input
                checked={radioValue === 2}
                onChange={() => setRadioValue(2)}
                type="radio"
                value={2}
              />
              <div className="innerBox-text">
                <span className="pair">2 Pair</span>
                <span className="price">DKK 345.00</span>
              </div>
            </div>
            <span className='box2-centre'>DKK 195.00</span>
            <div className="offer2">
              <span className="popular-title">Most Popular</span>
              <span className="offer">40% OFF</span>
            </div>
          </div>
          {radioValue == 2 && <SizeBox />}
        </div>
  )
}

export default Box2
