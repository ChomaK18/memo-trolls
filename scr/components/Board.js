import { useContext, useState } from "react";
import { useEffect } from "react/cjs/react.development";
import { GameContext } from "../context/GameContext";
import Card from "./Card";

const Board = () => {
  const [cardsId, setCardsId] = useState([1, 2, 3, 4, 5, 6, 7, 8]);
  const [firstRow, setFirstRow] = useState([1, 2, 3, 4]);
  const [secondtRow, setSecondRow] = useState([5, 6, 7, 8]);

  const { pair, setPair, score, setScore, faceUpCards, setFaceUpCards, board } =
    useContext(GameContext);

  const timerId = () => setTimeout(() => setPair([]), 1500);

  useEffect(() => {
    console.log("useEffect: pair.length - " + pair.length);
    isTwo() ? checkPair() : null;
  }, [pair]);

  const faceUpCard = (card) => {
    console.log("ID: " + card[0] + " FaceUpCardStart");
    clearTimeout(timerId);
    //console.log("Pair before: " + JSON.stringify(pairValues));
    // console.log(
    //   "FIRST CARD: " +
    //     pairValues.current.firstCard +
    //     " : " +
    //     !!pairValues.current.firstCard
    // );
    // pairValues.current.firstCard
    //   ? (pairValues.current.secondCard = id)
    //   : (pairValues.current.firstCard = id);
    setPair([...pair, { id: card[0], photoId: card[1] }]);
    //console.log("Pair after: " + JSON.stringify(pairValues));
  };

  const isTwo = () => {
    //console.log("ID: " + id + " isTwo starts");
    // pairValues.current.firstCard && pairValues.current.secondCard
    //   ? checkPair()
    //   : null;
    return pair.length == 2;
  };

  const checkPair = () => {
    //console.log("ID: " + id + " CheckPair starts");
    // pairValues.current.firstCard === pairValues.current.secondCard
    //   ? addPoints()
    //   : faceDownCards();
    pair[0].photoId === pair[1].photoId
      ? (addPoints(), savePair())
      : faceDownCards();
    console.log("pair: " + JSON.stringify(pair));
    //console.log("ID: " + id + " CheckPair ends");
  };

  const addPoints = () => {
    //console.log("ID: " + id + " Add points starts");
    setScore(score + 10);
    //console.log("ID: " + id + " Add points ends");
  };

  const savePair = () => {
    //console.log("ID: " + id + " save pair starts");
    setFaceUpCards([...faceUpCards, pair[0].photoId]);
    // pairValues.current.firstCard = undefined;
    // pairValues.current.secondCard = undefined;
    setPair([]);
    console.log("faceUpCards" + JSON.stringify(faceUpCards));
    console.log("pair: " + pair);
    //console.log("ID: " + id + " save pair ends");
  };

  const faceDownCards = () => {
    //console.log("ID: " + id + " Face down cards starts");
    //console.log("No pair :(");
    // pairValues.current.firstCard = undefined;
    // pairValues.current.secondCard = undefined;
    timerId();
    //console.log("ID: " + id + " Face down cards ends");
  };

  return (
    <div className="container d-flex justify-content-center">
      <div className="game-board row  justify-content-center align-content-center border m-1">
        {board.map((card) => {
          return (
            <Card
              photoId={card[1]}
              id={card[0]}
              key={card[0]}
              faceUpCard={faceUpCard}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Board;
