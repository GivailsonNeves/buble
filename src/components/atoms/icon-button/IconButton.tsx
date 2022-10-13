import React, { useMemo, ButtonHTMLAttributes } from "react";
import "./styles.scss";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  variant?: "content";
  theme?: "dark" | "light";
  size?: "s" | "m";
  selected?: boolean;
}

const IconButton: React.FC<Props> = ({
  children,
  className,
  variant,
  size = "m",
  theme = "dark",
  selected,
  ...props
}) => {
  const classNameValue = useMemo(() => {
    const classValues = ["app-icon-button"];
    if (size) classValues.push(`size--${size}`);
    if (theme) classValues.push(`theme--${theme}`);
    if (variant) classValues.push(variant);
    if (selected) classValues.push("selected");
    if (className) classValues.push(className);
    return classValues.join(" ");
  }, [className, variant, theme, size, selected]);

  return (
    <button {...props} className={classNameValue}>
      {children}
    </button>
  );
};

export default IconButton;
