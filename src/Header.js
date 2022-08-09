function Header(props) {
  let { myFunc, title } = props;
  let myName = "samalik";
  return (
    <div>
      <h2>Header is: {title}</h2>
      <button onClick={() => myFunc()}>Alert Header</button>
    </div>
  );
}

export default Header;
