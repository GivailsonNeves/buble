import React, { useMemo } from "react";
import "./styles.scss";

interface Props {
  children: React.ReactNode;
  className: string;
}

const PicturesGallery: React.FC<Props> = ({ children, className }) => {

  const classNameValue = useMemo(() => {
    const classValues = ["app-pictures-gallery"];
    if (className) classValues.push(className);
    return classValues.join(" ");
  }, [className]);
  
  return <div className={classNameValue}>{children}</div>;
};

export default PicturesGallery;
