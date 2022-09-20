import React, { useMemo } from "react";
import AppMenu from "../../organisms/app-menu";
import Screen from "../../atoms/screen";
import { HeaderMode } from "../../organisms/app-menu/AppMenu";
import "./styles.scss";

import HomeBackground from "../../../assets/imgs/miami_building.png";
import SideMenu from "../../organisms/side-menu";
import AppFlyingMenu from "../../organisms/app-flying-menu";
import IconButton from "../../atoms/icon-button";
import { View360Icon } from "../../atoms/icon";

interface Props {
  children: React.ReactNode;
  className: string;
}

const View360: React.FC<Props> = ({ children, className }) => {
  const classNameValue = useMemo(() => {
    const classValues = ["app-view-360"];
    if (className) classValues.push(className);
    return classValues.join(" ");
  }, [className]);

  return (
    <>
      <img className="buildingPhoto" src={HomeBackground} alt="home" />
      <Screen className={classNameValue}>
        <AppMenu mode={HeaderMode.user} />
        <AppFlyingMenu theme="dark" />
        <IconButton>
          <View360Icon size={50} />
        </IconButton>
      </Screen>
    </>
  );
};

export default View360;
