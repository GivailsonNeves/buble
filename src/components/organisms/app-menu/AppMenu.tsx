import React, { useMemo } from "react";
import Box from "../../atoms/box";
import BubleLogo from "../../atoms/buble-logo";
import { HomeIcon, SandwichMenuIcon, UserIcon } from "../../atoms/icon";
import IconButton from "../../atoms/icon-button";
import "./styles.scss";

export enum HeaderMode {
  none,
  home,
  user,
}

interface Props {
  children?: React.ReactNode;
  className?: string;
  mode: HeaderMode;
  onClick?: (element: string) => void;
}

const AppMenu: React.FC<Props> = ({
  children,
  className,
  onClick,
  mode = HeaderMode.home,
}) => {
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
      <Box>{children}</Box>
      <Box>
        <IconButton onClick={() => onClick && onClick(mode.toString())}>
          {mode === HeaderMode.home && <HomeIcon size={30} />}
          {mode === HeaderMode.user && <UserIcon size={30} />}
        </IconButton>
        <IconButton onClick={() => onClick && onClick("menu")}>
          <SandwichMenuIcon size={30} />
        </IconButton>
      </Box>
    </header>
  );
};

export default AppMenu;
