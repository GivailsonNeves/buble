import React, { useMemo } from "react";
import "./styles.scss";

interface Props {
  children: React.ReactNode;
  className: string;
}

const ResidentialView: React.FC<Props> = ({ children, className }) => {

  const classNameValue = useMemo(() => {
    const classValues = ["app-residential-view"];
    if (className) classValues.push(className);
    return classValues.join(" ");
  }, [className]);
  
  return <div className={classNameValue}>{children}</div>;
};

export default ResidentialView;
