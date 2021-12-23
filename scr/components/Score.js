import { useContext } from "react";
import { GameContext } from "../context/GameContext";

const Score = () => {
  const { score } = useContext(GameContext);
  return (
    <div className="m-2 col-4">
      <h3>Punkty: {score}</h3>
    </div>
  );
};

export default Score;
