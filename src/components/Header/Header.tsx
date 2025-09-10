import { Button } from "../Button/Button";

const Header = () => {
  return (
    <header className="w-screen flex justify-between items-center p-5">
      <Button
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
