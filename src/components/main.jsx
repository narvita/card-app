import "./main.css";
import Card from "../shared/card";

function Main({ numArr, deletCard }) {
  return (
    <div className="main">
      {numArr.map((index, key) => {
        return <Card key={key} i={index} removeCard={deletCard} />;
      })}
    </div>
  );
}

export default Main;
