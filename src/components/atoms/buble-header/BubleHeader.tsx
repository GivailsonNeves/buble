import React, { useMemo } from "react";
import BubleLogo from "../buble-logo";
import "./styles.scss";

interface Props {
  className?: string;
}

const BubleHeader: React.FC<Props> = ({ className }) => {
  const classNameValue = useMemo(() => {
    const classValues = ["app-buble-header"];
    if (className) classValues.push(className);
    return classValues.join(" ");
  }, [className]);

  return (
    <div className={classNameValue}>
      <BubleLogo />
    </div>
  );
};

export default BubleHeader;
