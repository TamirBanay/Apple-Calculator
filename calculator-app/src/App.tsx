import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [result, setResult] = useState(0);

  const buttons = [
    "AC",
    "+/-",
    "%",
    "/",
    7,
    8,
    9,
    "X",
    4,
    5,
    6,
    "-",
    1,
    2,
    3,
    "+",
    0,
    ",",
    "=",
  ];
  return (
    <div className="App">
      <div className="displayResult"></div>
      <div className="buttons">
        {buttons.map((button, index) => (
          <button
            className={
              button === "AC" || button === "+/-" || button === "%"
                ? "actions"
                : button === "X" ||
                  button === "-" ||
                  button === "+" ||
                  button === "=" ||
                  button === "/" ||
                  button === "-"
                ? "operations"
                : button === 0
                ? "zeroButton"
                : "number"
            }
            key={index}
          >
            {button}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
