import React, { useMemo } from "react";
import Screen from "../../atoms/screen";
import "./styles.scss";

import { View360Icon } from "../../atoms/icon";
import IconButton from "../../atoms/icon-button";

interface Props {
  className?: string;
  on360View: () => void;
  building: any;
}

const View360: React.FC<Props> = ({ className, on360View, building }) => {
  const classNameValue = useMemo(() => {
    const classValues = ["app-view-360"];
    if (className) classValues.push(className);
    return classValues.join(" ");
  }, [className]);

  return (
    <Screen className={classNameValue} backgronImgPath={building.background}>
      <IconButton onClick={() => on360View()}>
        <View360Icon size={50} />
      </IconButton>
    </Screen>
  );
};

export default View360;
