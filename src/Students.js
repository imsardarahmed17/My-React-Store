function Students({ name, city, proffesion }) {
  return (
    <div
      style={{ color: "purple", backgroundColor: "skyblue", textAlign: "center" }}
    >
      <h2>Name: {name}</h2>
      <h2>City name: {city}</h2>
      <h2>proffesion: {proffesion}</h2>
    </div>
  );
}

export default Students;
