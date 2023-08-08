import React from "react";
import Select from "../select/Select";
import './SizeBox.css'

const SizeBox = () => {
  return (
    <div className="sizeBox">
      <table>
        <tr>
          <td></td>
          <td className="text">Size</td>
          <td className="text">Color</td>
        </tr>
        <tr>
          <td className="hash">#1</td>
          <td>
            <Select />
          </td>
          <td>
            <Select />
          </td>
        </tr>
        <tr>
          <td className="hash">#2</td>
          <td>
            <Select />
          </td>
          <td>
            <Select />
          </td>
        </tr>
      </table>
    </div>
  );
};

export default SizeBox;
