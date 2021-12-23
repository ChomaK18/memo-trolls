import { useContext } from "react";
import { useEffect } from "react/cjs/react.development";
import { GameContext } from "../context/GameContext";

const GameTime = () => {
  const { gameTime, setGameTime, score, isGameCompleted } =
    useContext(GameContext);

  useEffect(() => {
    if (!isGameCompleted) {
      const timerId = setTimeout(() => setGameTime(gameTime + 1), 1000);
      return () => clearTimeout(timerId);
    }
  }, [gameTime]);
  return (
    <div className="m-2 col-4">
      <h3>Czas gry: {gameTime}</h3>
    </div>
  );
};

export default GameTime;
