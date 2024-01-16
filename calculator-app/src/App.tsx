import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [currentInput, setCurrentInput] = useState("");
  const [firstInput, setFirstInput] = useState<number | null>(0);
  const [operation, setOperation] = useState<string | null>(null);
  const [selectedOperation, setSelectedOperation] = useState<string | null>(
    null
  );

  const handleButtonClick = (button: number | string) => {
    if (typeof button === "string" && ["+", "-", "x", "÷"].includes(button)) {
      setSelectedOperation(button);
    }
    if (button === "AC") {
      setSelectedOperation(null);
    }

    if (typeof button === "number" || button === ".") {
      setCurrentInput(currentInput + button.toString());
    } else {
      switch (button) {
        case "AC":
          setCurrentInput("");
          setFirstInput(null);
          setOperation(null);
          break;
        case "+/-":
          setCurrentInput(
            currentInput ? (-parseFloat(currentInput)).toString() : ""
          );
          break;
        case "%":
          setCurrentInput(
            currentInput ? (parseFloat(currentInput) / 100).toString() : ""
          );
          break;
        case "=":
          if (operation && firstInput !== null) {
            const result = calculate(
              firstInput,
              parseFloat(currentInput),
              operation
            );
            setCurrentInput(result.toString());
            setFirstInput(null);
            setOperation(null);
          }
          break;
        default:
          if (currentInput !== "") {
            setOperation(button);
            setFirstInput(parseFloat(currentInput));
            setCurrentInput("");
          }
          break;
      }
    }
  };

  const calculate = (first: number, second: number, operation: string) => {
    switch (operation) {
      case "+":
        return first + second;
      case "-":
        return first - second;
      case "x":
        return first * second;
      case "÷":
        return first / second;
      case ",":
        return first + "." + second;
      default:
        return second;
    }
  };

  const buttons = [
    "AC",
    "+/-",
    "%",
    "÷",
    7,
    8,
    9,
    "x",
    4,
    5,
    6,
    "-",
    1,
    2,
    3,
    "+",
    0,
    ".",
    "=",
  ];
  return (
    <div className="App">
      <div className="displayResult">{currentInput}</div>
      <div className="buttons">
        {buttons.map((button, index) => (
          <button
            onClick={() => handleButtonClick(button)}
            className={
              button === "AC" || button === "+/-" || button === "%"
                ? "actions"
                : button === "x" ||
                  button === "-" ||
                  button === "+" ||
                  button === "=" ||
                  button === "÷"
                ? selectedOperation === button
                  ? "operationSelected"
                  : "operations"
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
