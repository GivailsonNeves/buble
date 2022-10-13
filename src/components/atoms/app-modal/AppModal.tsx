import React, { useMemo } from "react";
import "./styles.scss";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const AppModal: React.FC<Props> = ({ children, className }) => {
  const classNameValue = useMemo(() => {
    const classValues = ["app-app-modal"];
    if (className) classValues.push(className);
    return classValues.join(" ");
  }, [className]);

  return (
    <div className={classNameValue}>
      <div>{children}</div>
    </div>
  );
};

export default AppModal;
