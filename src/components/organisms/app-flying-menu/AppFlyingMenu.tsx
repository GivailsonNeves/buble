import React, { useMemo } from "react";
import {
  HandIcon,
  LocationIcon,
  PenIcon,
  PictureIcon,
  PlayIcon,
  StarIcon,
} from "../../atoms/icon";
import IconButton from "../../atoms/icon-button";
import "./styles.scss";

interface Props {
  className?: string;
  theme?: "dark" | "light";
}

const AppFlyingMenu: React.FC<Props> = ({ className, theme = "light" }) => {
  const colorName = useMemo(() => {
    return theme === "dark" ? "white" : "black";
  }, [theme]);
  const classNameValue = useMemo(() => {
    const classValues = ["app-app-flying-menu"];
    if (className) classValues.push(className);
    return classValues.join(" ");
  }, [className]);

  return (
    <nav className={classNameValue}>
      <ul>
        <li>
          <IconButton theme={theme} size="s" variant="content">
            <PenIcon color={colorName} size={15} />
          </IconButton>
        </li>
        <li>
          <IconButton theme={theme} size="s" variant="content">
            <PlayIcon color={colorName} size={15} />
          </IconButton>
        </li>
        <li>
          <IconButton theme={theme} size="s" variant="content">
            <LocationIcon color={colorName} size={15} />
          </IconButton>
        </li>
        <li>
          <IconButton theme={theme} size="s" variant="content">
            <PictureIcon color={colorName} size={15} />
          </IconButton>
        </li>
        <li>
          <IconButton theme={theme} size="s" variant="content">
            <StarIcon color={colorName} size={15} />
          </IconButton>
        </li>
        <li>
          <IconButton theme={theme} size="s" variant="content">
            <HandIcon color={colorName} size={15} />
          </IconButton>
        </li>
      </ul>
    </nav>
  );
};

export default AppFlyingMenu;
