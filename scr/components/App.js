import { GameProvider } from "../context/GameContext";
import Board from "./Board";
import GameToolbar from "./GameToolbar";
import Header from "./Header";
import Winner from "./Winner";

const App = () => {
  return (
    <div>
      <Header />
      <GameProvider>
        <GameToolbar />
        <Board />
      </GameProvider>
    </div>
  );
};

export default App;
