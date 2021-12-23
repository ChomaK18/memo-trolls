import { useContext } from "react";
import { GameContext } from "../context/GameContext";
import { suffleBoard } from "../mathUtils";

const NewGameButton = () => {
  const {
    setFaceUpCards,
    setScore,
    setGameTime,
    setIsGameCompleted,
    board,
    setBoard,
    setPair,
  } = useContext(GameContext);
  return (
    <button
      className="btn btn-primary m-2"
      onClick={() => {
        setPair([]);
        setFaceUpCards([]);
        setScore(0);
        setGameTime(0);
        setIsGameCompleted(false);
        setBoard(suffleBoard(board));
      }}
    >
      Nowa gra
    </button>
  );
};

export default NewGameButton;
