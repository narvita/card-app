import "./header.css";

function Header({ addCard, sort }) {
  return (
    <div className="App-header">
      <button onClick={addCard}>Add Card</button>
      <button onClick={sort}>Sort</button>
    </div>
  );
}

export default Header;
