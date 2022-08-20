import { createContext, useContext, useRef, useState } from "react";
import { useEffect } from "react/cjs/react.development";
import { Children } from "react/cjs/react.production.min";

const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [score, setScore] = useState(0);
  const [gameTime, setGameTime] = useState(0);
  const [isGameCompleted, setIsGameCompleted] = useState(false);
  const [faceUpCards, setFaceUpCards] = useState([]);
  const [pair, setPair] = useState([]);
  let firstCard;
  let secondCard;
  const pairValues = useRef({ firstCard, secondCard });

  useEffect(() => {
    if (score > 70) {
      setIsGameCompleted(true);
    }
  }, [score]);

  const [board, setBoard] = useState([
    [1, 1],
    [2, 2],
    [3, 3],
    [4, 4],
    [5, 5],
    [6, 6],
    [7, 7],
    [8, 8],
    [9, 1],
    [10, 2],
    [11, 3],
    [12, 4],
    [13, 5],
    [14, 6],
    [15, 7],
    [16, 8],
  ]);

  return (
    <GameContext.Provider
      value={{
        score,
        setScore,
        gameTime,
        setGameTime,
        faceUpCards,
        setFaceUpCards,
        pair,
        setPair,
        pairValues,
        isGameCompleted,
        setIsGameCompleted,
        board,
        setBoard,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export { GameProvider, GameContext };
