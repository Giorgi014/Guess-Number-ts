import { useEffect, useState } from "react";
import Header from "../Header/Header";
import { Game } from "./Game/Game";
import { GuessNumber } from "./GuessNumber/GuessNumber";

const Main = () => {
  const [maxNumber] = useState<number>(20);
  const [initialScore] = useState<number>(20);
  const [secretNumber, setSecretNumber] = useState<number>(
    () => Math.floor(Math.random() * maxNumber) + 1
  );
  const [score, setScore] = useState<number>(initialScore);
  const [highScore, setHighScore] = useState<number>(0);
  const [message, setMessage] = useState<string>("Start guessing...");
  const [bgColor, setBgColor] = useState<string>("");
  const [inputValue, setInputValue] = useState<string>("");

  useEffect(() => {
    console.log("Secret Number =", secretNumber);
  }, [secretNumber]);

  const handleCheck = () => {
    const guess = Number(inputValue);

    if (!inputValue || Number.isNaN(guess)) {
      setMessage("⛔️ Enter a number!");
      return;
    }

    if (guess === secretNumber) {
      setMessage("🎉 Correct Number!");
      setBgColor("green");

      if (score > highScore) {
        setHighScore(score);
      }
    } else {
      if (score > 1) {
        setScore((prev) => prev - 1);
        setMessage(guess > secretNumber ? "📈 Too high!" : "📉 Too low!");
      } else {
        setScore(0);
        setMessage("💥 You lost the game!");
        setBgColor("red");
      }
    }
  };

  const handleAgain = () => {
    setScore(initialScore);
    setMessage("Start guessing...");
    setBgColor("");
    setInputValue("");
    setSecretNumber(Math.floor(Math.random() * maxNumber) + 1);
  };

  return (
    <main className="w-screen h-screen" style={{ backgroundColor: bgColor }}>
      <Header onAgain={handleAgain} />
      <h1 className="w-screen text-center font-myfont guess_num">
        Guess My Number!
      </h1>
      <GuessNumber
        revealedNumber={message === "🎉 Correct Number!" ? secretNumber : null}
      />
      <Game
        score={score}
        highScore={highScore}
        message={message}
        inputValue={inputValue}
        change={(v) => setInputValue(v)}
        onCheck={handleCheck}
        maxNumber={maxNumber}
      />
    </main>
  );
};

export default Main;
