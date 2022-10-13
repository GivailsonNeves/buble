import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../../../context/AppContext";
import Box from "../../atoms/box";
import BubleLogo from "../../atoms/buble-logo";
import { HomeIcon, SandwichMenuIcon, UserIcon } from "../../atoms/icon";
import IconButton from "../../atoms/icon-button";
import "./styles.scss";

export enum HeaderMode {
  none = "none",
  navigation = "navigation",
  home = "home",
  user = "user",
}

interface Props {
  className?: string;
  mode: HeaderMode;
  onClick?: (element: string) => void;
}

const AppMenu: React.FC<Props> = ({
  className,
  onClick,
  mode = HeaderMode.home,
}) => {
  const { building } = useAppContext();

  const classNameValue = useMemo(() => {
    const classValues = ["app-app-menu"];
    if (className) classValues.push(className);
    return classValues.join(" ");
  }, [className]);

  return (
    <header className={classNameValue}>
      <Box>
        <IconButton onClick={() => onClick && onClick("logo")}>
          <BubleLogo />
        </IconButton>
      </Box>
      <Box className="logo-area">
        {building?.headerLogo && (
          <Link to={`building/${building.id}`}>
            <img src={building.headerLogo} alt={building.name} />
          </Link>
        )}
      </Box>
      <Box>
        <IconButton onClick={() => onClick && onClick(mode.toString())}>
          {mode === HeaderMode.home && <HomeIcon size={20} />}
          {mode === HeaderMode.user && <UserIcon size={20} />}
        </IconButton>
        {mode !== HeaderMode.none && (
          <IconButton onClick={() => onClick && onClick("menu")}>
            <SandwichMenuIcon size={20} />
          </IconButton>
        )}
      </Box>
    </header>
  );
};

export default AppMenu;
