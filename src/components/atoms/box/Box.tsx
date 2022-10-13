import React, { useMemo } from "react";
import "./styles.scss";

interface Props {
  children?: React.ReactNode;
  className?: string;
  column?: boolean;
}

const Box: React.FC<Props> = ({ children, className, column = false }) => {
  const classNameValue = useMemo(() => {
    const classValues = ["app-box"];
    if (className) classValues.push(className);
    if (column) classValues.push("column");
    return classValues.join(" ");
  }, [className, column]);

  return <div className={classNameValue}>{children}</div>;
};

export default Box;
