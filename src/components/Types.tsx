export type ButtonVariant = "check" | "again";

export type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: ButtonVariant;
  className?: string;
};

export type CheckNumber = {
  number: number;
};

export type AgainProps = {
  onAgain?: () => void;
};

export type GameProps = {
  score: number;
  highScore: number;
  message: string;
  inputValue: string;
  change: (v: string) => void;
  onCheck: () => void;
  maxNumber?: number;
};

export type GuessNumberProps = {
  revealedNumber?: number | null
}
