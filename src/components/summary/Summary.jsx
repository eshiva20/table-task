import React from "react";
import "./Summary.css"

const Summary = () => {
  return (
    <div className="summary">
      <span className="shipping">Free 2 Day Shipping</span>
      <span >Total : <span className="total">DKK 360.00</span> </span>
    </div>
  );
};

export default Summary;
