// import logo from './logo.svg';
import "./App.css";
// import Header from "./Header";
// import Students from "./Students";
// import Child from "./Child";
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

function App() {
  const [value, setValue] = useState(0);

  function reset() {
    return setValue(0);
  }
const complexIncrease= ()=>{
  setTimeout(
    ()=>{
      setValue((prevState)=>{
        return prevState + 1;
      })
    } , 2000
  )
}

  return (
    <div className="App">
      <h1>value is: {value}</h1>
      <Button
        className="btn"
        variant="primary"
        onClick={() => setValue(value + 1)}
      >
        Increase
      </Button>
      <Button className="btn" varient="primary" onClick={reset}>
        Reset
      </Button>
      <Button
        className="btn"
        varient="primary"
        onClick={() => setValue(value - 1)}
      >
        Decrease
      </Button>
      <br />
      <br />
      <h1>value is: {value}</h1>
      <Button className="btn" varient="primary" onClick={complexIncrease}>
        Comlex counter
      </Button>
    </div>
  );
}

export default App;
