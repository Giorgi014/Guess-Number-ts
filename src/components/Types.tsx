export type ButtonVariant = "check" | "again";

export type ButtonProps = {
  children: React.ReactNode
  onClick?: () => void;
  variant?: ButtonVariant;
  className?: string;
};

export type CheckNumber = {
    number: number
}