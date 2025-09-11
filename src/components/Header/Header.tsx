import { Button } from "../Button/Button";
import type { AgainProps } from "../Types";

const Header = ({onAgain}:AgainProps) => {
  return (
    <header className="w-screen h-[60px] flex justify-between items-center p-5">
      <Button
        onClick={onAgain}
        variant="again"
        className="font-myfont again_btn flex justify-center items-center cursor-pointer"
      >
        Again!
      </Button>
      <p className="font-myfont between">Between 1 and 20</p>
    </header>
  );
};

export default Header;
