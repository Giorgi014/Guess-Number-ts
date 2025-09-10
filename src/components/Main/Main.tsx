import Header from "../Header/Header";
import { Game } from "./Game/Game";
import { GuessNumber } from "./GuessNumber/GuessNumber";

const Main = () => {
  return (
    <main className="w-screen h-screen">
      <Header />
      <h1 className="w-screen text-center font-myfont guess_num">
        Guess My Number!
      </h1>
      <GuessNumber />
      <Game />
    </main>
  );
};

export default Main;
