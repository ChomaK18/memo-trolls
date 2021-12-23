import { useContext } from "react";
import { GameContext } from "../context/GameContext";
import NewGameButton from "./NewGameButton";
import Score from "./Score";
import GameTime from "./Time";
import Winner from "./Winner";

const GameToolbar = () => {
  const { isGameCompleted } = useContext(GameContext);
  return (
    <div className="container d-flex justify-content-center">
      <div className="toolbar justify-content-center align-content-center">
      <div className="d-flex justify-content-center align-items-center m-2">
        <Score />
        <GameTime />
        <NewGameButton />
      </div>
      {isGameCompleted ? (
        <div className="d-flex justify-content-center align-items-center m-2">
          <Winner />
        </div>
      ) : null}
      </div>

    </div>
  );
};

export default GameToolbar;
