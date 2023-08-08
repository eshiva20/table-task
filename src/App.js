import { useState } from "react";
import "./App.css";
import Summary from "./components/summary/Summary";
import Button from "./components/button/Button";
import Box1 from "./components/box/Box1";
import Box2 from "./components/box/Box2";
import Box3 from "./components/box/Box3";

function App() {
  const [radioValue, setRadioValue] = useState();

  return (
    <div className="container">
      <div className="main">
        <p className="line">Bundle & Save </p>
        <Box1 radioValue={radioValue} setRadioValue={setRadioValue} />
        <Box2 radioValue={radioValue} setRadioValue={setRadioValue} />
        <Box3 radioValue={radioValue} setRadioValue={setRadioValue} />
        <Summary />
        <Button />
        <p className="credit">
          &copy; <span className="creditText"> Powered by Pumper</span>
        </p>
      </div>
    </div>
  );
}

export default App;
