import React, { useMemo } from "react";
import Screen from "../../atoms/screen";

import BubbleLogo from "../../../assets/imgs/icons/logo_bubble.svg";
import BubbleSoap from "../../../assets/imgs/icons/bubble_soap.svg";

import "./styles.scss";

interface Props {
  className: string;
}

const Splash: React.FC<Props> = ({ className }) => {
  const classNameValue = useMemo(() => {
    const classValues = ["app-splash"];
    if (className) classValues.push(className);
    return classValues.join(" ");
  }, [className]);

  return (
    <Screen className={classNameValue}>
      <img className="logo" src={BubbleLogo} alt="bubble" />
      <img className="buble" src={BubbleSoap} alt="BubbleSoap" />
    </Screen>
  );
};

export default Splash;
