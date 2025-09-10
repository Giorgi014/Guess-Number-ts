import type { ButtonProps } from "../Types";

export const Button = ({
  children,
  onClick,
  variant = "check",
  className,
}: ButtonProps) => {
  return (
    <button onClick={onClick} className={`btn ${variant} ${className || ""}`}>
      {children}
    </button>
  );
};
