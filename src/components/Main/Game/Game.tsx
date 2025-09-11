import { Button } from "../../Button/Button";
import type { GameProps } from "../../Types";

export const Game = ({
  score,
  highScore,
  message,
  inputValue,
  change,
  onCheck,
  maxNumber = 20,
}: GameProps) => {
  return (
    <div className="w-screen flex justify-between items-center margin_top max-md:flex-col">
      <div className="w-[50%] max-md:w-full flex justify-center items-center flex-col">
        <input
          type="number"
          min={1}
          max={maxNumber}
          value={inputValue}
          onChange={(e) => change(e.target.value)}
          className="w-[200px] h-[100px] max-md:w-full input bg-transparent text-center text-[1.2rem] white font-myfont"
        />
        <Button
          variant="check"
          onClick={onCheck}
          className="w-[130px] max-md:w-full h-[40px] mt-10 black text-[0.9rem] font-myfont white_bg cursor-pointer"
        >
          Check!
        </Button>
      </div>
      <div className="w-[50%] flex justify-start items-center flex-col max-md:mt-[30px]">
        <p className="mb-10 text-[1rem] white font-myfont">{message}</p>
        <div className="flex justify-start items-center gap-5 mr-[27px]">
          <p>💯</p>
          <p className="white font-myfont">Score:</p>
          <p className="white font-myfont">{score}</p>
        </div>
        <div className="flex justify-start items-center gap-5 mt-[30px] mb-[30px]">
          <p>🥇</p>
          <p className="white font-myfont">Hightscore:</p>
          <p className="white font-myfont">{highScore}</p>
        </div>
      </div>
    </div>
  );
};
