function Child({ alert }) {
  let myName = "samalik";
  return (
    <button
      onClick={() => {
        alert(myName);
      }}
    >
      Child To Parent
    </button>
  );
}

export default Child;
