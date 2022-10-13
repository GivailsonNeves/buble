import * as React from "react";
import "./styles.scss";

interface Props {
  round?: boolean;
  variant?: "default" | "gold" | "grey" | "dark" | "red" | "red-inverted";
  className?: string;
  type?: "submit" | "button" | "reset";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  children?: React.ReactNode;
}

const Button: React.FC<Props> = ({
  round = false,
  variant = "default",
  className = "",
  type,
  disabled = false,
  onClick,
  children,
}) => {
  const classNameValue = React.useMemo(() => {
    const classValues = ["app-button", variant];
    if (className) classValues.push(className);
    if (round) classValues.push("border-rounded");
    return classValues.join(" ");
  }, [className, round, variant]);
  return (
    <button
      disabled={disabled}
      type={type}
      onClick={onClick}
      className={classNameValue}
    >
      {children}
    </button>
  );
};

export default Button;
