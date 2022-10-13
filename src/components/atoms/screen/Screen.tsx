import React, { useMemo } from "react";
import "./styles.scss";

interface Props {
  children: React.ReactNode;
  className?: string;
  backgronImgPath?: string;
}

const Screen: React.FC<Props> = ({ children, className, backgronImgPath }) => {
  const classNameValue = useMemo(() => {
    const classValues = ["app-screen"];
    if (className) classValues.push(className);
    return classValues.join(" ");
  }, [className]);
  return (
    <>
      {backgronImgPath && (
        <picture className="opacityBG">
          <img src={backgronImgPath} alt="background img" />
        </picture>
      )}
      <section className={classNameValue}>{children}</section>
    </>
  );
};

export default Screen;
