import "./card.css";

function Card({ i, removeCard }) {
  return (
    <div className="card">
      <span>{i.num}</span>
      <span onClick={() => removeCard(i.id)} className="del-btn">
        X
      </span>
    </div>
  );
}

export default Card;
