// import logo from './logo.svg';
import "./App.css";
// import Header from "./Header";
// import Students from "./Students";
// import Child from "./Child";
// import React, { useState } from "react";
import "./style.css";
import style from './custom.module.css'
function App() {
  return (
    <div className="App">
      <h1><u>Style types</u></h1>
      <h1 className="primary">Style types: extenal</h1>
      <h1 style={{ backgroundColor: "skyblue", color: "red", padding: "20px" }}>
        Style types: internal
      </h1>
      <h1 className={style.custom}>Style types: Moduler css </h1>
    </div>
  );
}

export default App;
