import { Button } from "../../Button/Button";

export const Game = () => {
  return (
    <div className="w-screen flex justify-between items-center margin_top">
      <div className="w-[50%] flex justify-center items-center flex-col">
        <input
          type="number"
          className="w-[200px] h-[100px] input bg-transparent text-center text-[1.2rem] white font-myfont"
        />
        <Button
          variant="check"
          className="w-[130px] h-[40px] mt-10 black text-[0.9rem] font-myfont white_bg cursor-pointer"
        >
          Check!
        </Button>
      </div>
      <div className="w-[50%] flex justify-start items-center flex-col">
        <p className="mb-10 text-[1rem] white font-myfont">Start guessing...</p>
        <div className="flex justify-start items-center gap-5 mr-[27px]">
          <p>💯</p>
          <p className="white font-myfont">Score:</p>
          <p className="white font-myfont">20</p>
        </div>
        <div className="flex justify-start items-center gap-5 mt-[30px] mb-[30px]">
          <p>🥇</p>
          <p className="white font-myfont">Hightscore:</p>
          <p className="white font-myfont">0</p>
        </div>
      </div>
    </div>
  );
};
