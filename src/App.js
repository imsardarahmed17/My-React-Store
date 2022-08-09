// import logo from './logo.svg';
import "./App.css";
import Header from "./Header";
import Students from "./Students";
import Child from "./Child";

function App() {
  function getHeader() {
    return alert("welcome");
  }
  function getName(myName) {
    alert(myName);
  }
  return (
    <div>
      <Child alert={getName} />
      <Header myFunc={getHeader} title="Bank of Pakistan" />
      <Students
        name="Sardar Ahmed"
        city="Islamabad"
        proffesion={"Web developer"}
      />
      <Students name="Abrar" city="Shadia" proffesion={"Web developer"} />
      <Students
        name="Sajid Iqbal"
        city="Mianwali"
        proffesion={"Web developer"}
      />
    </div>
  );
}

export default App;
