import type { GuessNumberProps } from "../../Types";

export const GuessNumber = ({ revealedNumber }: GuessNumberProps) => {
  return (
    <div className="w-screen h-[3px] flex justify-center items-center white relative bg-[white] mt-[130px]">
      <div className="w-[150px] h-[100px] flex justify-center items-center bg-[white]">
        <p className="black font-myfont text-5xl justify-center items-center font-bold">
          {revealedNumber ?? "?"}
        </p>
      </div>
    </div>
  );
};
