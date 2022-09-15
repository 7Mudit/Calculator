import "./App.css";
import { useState } from "react";

function App() {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  //operators
  const ops = ["/", "*", "+", "-", "."];

  const updateCalc = (value) => {
    if((ops.includes(value) && calc==='')|| (ops.includes(value) && ops.includes(calc.slice(-1)))){
      return;
    }
  
    setCalc(calc + value);
    if(!ops.includes(value)){
       // eslint-disable-next-line
      setResult(eval(calc+value).toString())
    }
  };

  const createDigits = () => {
    const digits = [];
    for (let i = 1; i < 10; i++) {
      digits.push(
        <button onClick={() => updateCalc(i.toString())} key={i}>
          {i}
        </button>
      );
    }
    return digits;
  };
  const calculate=()=>{
     // eslint-disable-next-line
    setCalc(eval(calc.toString()))
  }
  const deleteLast=()=>{
    if(calc===''){
      setResult('')
      return
    }
    setCalc('')
    setResult('')
  }
  return (
    <div className="app">
      <div className="Calculator">
        <div className="display">
          {/* if there is a value we will show it otherwise not */}
          {result ? <span>({result})</span> : ""}&nbsp;
          {calc || "0"}
        </div>
        <div className="operators">
          <button onClick={() => updateCalc("/")}>/</button>
          <button onClick={() => updateCalc("*")}>*</button>
          <button onClick={() => updateCalc("+")}>+</button>
          <button onClick={() => updateCalc("-")}>-</button>
          <button onClick={deleteLast}>DEL</button>
        </div>

        <div className="digits">
          {createDigits()}
          <button onClick={() => updateCalc("0")}>0</button>
          <button onClick={() => updateCalc(".")}>.</button>
          <button onClick={calculate}>=</button>
          {/* <button>1</button> */}
        </div>
      </div>
    </div>
  );
}

export default App;
