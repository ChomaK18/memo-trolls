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
    isTwo() ? checkPair() : null;
  }, [pair]);

  const faceUpCard = (card) => {
    clearTimeout(timerId);
    setPair([...pair, { id: card[0], photoId: card[1] }]);
  };

  const isTwo = () => {
    return pair.length == 2;
  };

  const checkPair = () => {
    pair[0].photoId === pair[1].photoId
      ? (addPoints(), savePair())
      : faceDownCards();
  };

  const addPoints = () => {
    setScore(score + 10);
  };

  const savePair = () => {
    setFaceUpCards([...faceUpCards, pair[0].photoId]);
    setPair([]);

  };

  const faceDownCards = () => {
    timerId();
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
