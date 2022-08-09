// import logo from './logo.svg';
import "./App.css";
import Header from "./Header";
// import Students from "./Students";
// import Child from "./Child";
import React, { useState } from 'react';

function App() {
  const [status, setStatus] = useState(true);
return(
  <div className="App">
    {
      status ? <h1>Hello world</h1>: null
    }
    <br/>
    <button onClick={()=> setStatus(!status)}>Toggle</button>
    
    <Header/>
  </div>
)  
}

export default App;
