import React, { useState } from 'react';
import { evaluate } from 'mathjs';

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  // Append value to input
  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  //for brackets ()
  const handleBracketClick = () => {
        const lastChar = input[input.length - 1];
        const openBrackets = (input.match(/\(/g) || []).length;
        const closeBrackets = (input.match(/\)/g) || []).length;

        if (openBrackets > closeBrackets && lastChar !== "(") {
          // If there’s an unmatched "(" and last char is not "("
          setInput(input + ")");
        } else {
          // Otherwise, add "("
          setInput(input + "(");
        }
    };

  // Clear everything
  const handleClear = () => {
    setInput("");
    setResult("");
  };

  // Delete last character
  const handleDelete = () => {
    setInput((prev) => prev.slice(0, -1));
  };

 // Preprocess for implicit multiplication
const preprocessExpression = (expr) => {
  return expr
    .replace(/(\d)(\()/g, "$1*$2") // number before (
    .replace(/(\))(\d)/g, "$1*$2") // ) before number
    .replace(/(\))(\()/g, "$1*$2"); // ) before (
};

const handleCalculate = () => {
  try {
    const processed = preprocessExpression(input);
    const res = evaluate(processed);
    setResult(res);
  } catch {
    setResult("Error");
  }
};

  return (
    <div className="d-flex justify-content-center align-items-start no-caret">
      <div
        className="container bg-secondary p-3 rounded shadow slide-from-navbar mt-5"
        style={{ maxWidth: "350px" }}
      >
        {/* Title */}
        <h1 className="text-center mb-4 text-white">Calculator</h1>

        {/* Small display */}
        <div className="row">
          <div className="col text-end text-light small">
            {input || "0"}
          </div>
        </div>

        {/* Big display */}
        <div className="row mb-3">
          <div className="col text-end fs-1 text-white fw-bold" >
            {result || "0"}
          </div>
        </div>

        {/* Row 1 */}
        <div className="row mb-2">
          <div className="col p-1"><button onClick={handleClear} className="btn btn-danger w-100">C</button></div>
          <div className="col p-1"><button onClick={handleBracketClick} className="btn btn-outline-light w-100">( )</button></div>
          <div className="col p-1"><button onClick={() => handleClick("%")} className="btn btn-outline-light w-100">%</button></div>
          <div className="col p-1"><button onClick={handleDelete} className="btn btn-warning w-100">DEL</button></div>
        </div>

        {/* Row 2 */}
        <div className="row mb-2">
          {[7,8,9].map(num => (
            <div key={num} className="col p-1">
              <button onClick={() => handleClick(num)} className="btn btn-outline-light w-100">{num}</button>
            </div>
          ))}
          <div className="col p-1"><button onClick={() => handleClick("*")} className="btn btn-primary w-100">*</button></div>
        </div>

        {/* Row 3 */}
        <div className="row mb-2">
          {[4,5,6].map(num => (
            <div key={num} className="col p-1">
              <button onClick={() => handleClick(num)} className="btn btn-outline-light w-100">{num}</button>
            </div>
          ))}
          <div className="col p-1"><button onClick={() => handleClick("-")} className="btn btn-primary w-100">-</button></div>
        </div>

        {/* Row 4 */}
        <div className="row mb-2">
          {[1,2,3].map(num => (
            <div key={num} className="col p-1">
              <button onClick={() => handleClick(num)} className="btn btn-outline-light w-100">{num}</button>
            </div>
          ))}
          <div className="col p-1"><button onClick={() => handleClick("/")} className="btn btn-primary w-100">/</button></div>
        </div>

        {/* Row 5 */}
        <div className="row">
          <div className="col p-1"><button onClick={() => handleClick("0")} className="btn btn-outline-light w-100">0</button></div>
          <div className="col p-1"><button onClick={() => handleClick(".")} className="btn btn-outline-light w-100">.</button></div>
          <div className="col p-1"><button onClick={handleCalculate} className="btn btn-success w-100">=</button></div>
          <div className="col p-1"><button onClick={() => handleClick("+")} className="btn btn-primary w-100">+</button></div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;