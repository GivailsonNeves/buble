import React, { useMemo } from "react";
import Screen from "../../atoms/screen";

import BubbleLogo from "../../../assets/imgs/icons/logo_bubble.svg";
import BubbleSoap from "../../../assets/imgs/icons/bubble_soap.svg";

import "./styles.scss";
import Box from "../../atoms/box";

interface Props {
  className?: string;
  open?: boolean;
}

const Splash: React.FC<Props> = ({ className, open = false }) => {
  const classNameValue = useMemo(() => {
    const classValues = ["app-splash"];
    if (className) classValues.push(className);
    if (open) classValues.push("open");
    return classValues.join(" ");
  }, [className]);

  return (
    <Screen className={classNameValue}>
      <Box>
        <img className="logo" src={BubbleLogo} alt="bubble" />
        <img className="buble" src={BubbleSoap} alt="BubbleSoap" />
      </Box>
    </Screen>
  );
};

export default Splash;
