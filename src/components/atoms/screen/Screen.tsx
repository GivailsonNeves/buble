import React, { useMemo } from "react";
import "./styles.scss";

interface Props {
  children: React.ReactNode;
  className: string;
}

const Screen: React.FC<Props> = ({ children, className }) => {
  const classNameValue = useMemo(() => {
    const classValues = ["app-screen"];
    if (className) classValues.push(className);
    return classValues.join(" ");
  }, [className]);
  return <section className={classNameValue}>{children}</section>;
};

export default Screen;
