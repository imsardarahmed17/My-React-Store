// import logo from './logo.svg';
import "./App.css";
import Header from "./Header";
// import Students from "./Students";
// import Child from "./Child";
import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
return(
  <div>
    <h1>Count is: {count}</h1>
    <button onClick={() => setCount(count + 1)} >Counter</button>
    <Header/>
  </div>
)  
}

export default App;
