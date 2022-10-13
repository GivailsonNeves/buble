import React, { useCallback, useMemo } from "react";
import { useLocation } from "react-router-dom";
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
  onItemClick?: (item: string) => void;
}

const AppFlyingMenu: React.FC<Props> = ({
  className,
  theme = "light",
  onItemClick,
}) => {
  const location = useLocation();
  const colorName = useMemo(() => {
    return theme === "dark" ? "white" : "black";
  }, [theme]);
  const classNameValue = useMemo(() => {
    const classValues = ["app-app-flying-menu"];
    if (className) classValues.push(className);
    return classValues.join(" ");
  }, [className]);

  const isIconSelected = useCallback(
    (path: string) => location.pathname.includes(path),
    [location]
  );

  return (
    <nav className={classNameValue}>
      <ul>
        <li>
          <IconButton
            onClick={() => !!onItemClick && onItemClick("detail")}
            theme={theme}
            selected={isIconSelected("detail")}
            size="s"
            variant="content"
          >
            <PenIcon color={colorName} size={15} />
          </IconButton>
        </li>
        <li>
          <IconButton
            onClick={() => !!onItemClick && onItemClick("video")}
            theme={theme}
            selected={isIconSelected("video")}
            size="s"
            variant="content"
          >
            <PlayIcon color={colorName} size={15} />
          </IconButton>
        </li>
        <li>
          <IconButton
            onClick={() => !!onItemClick && onItemClick("location")}
            selected={isIconSelected("location")}
            theme={theme}
            size="s"
            variant="content"
          >
            <LocationIcon color={colorName} size={15} />
          </IconButton>
        </li>
        <li>
          <IconButton
            onClick={() => !!onItemClick && onItemClick("pictures")}
            selected={isIconSelected("pictures")}
            theme={theme}
            size="s"
            variant="content"
          >
            <PictureIcon color={colorName} size={15} />
          </IconButton>
        </li>
        <li>
          <IconButton
            onClick={() => !!onItemClick && onItemClick("favorit")}
            selected={isIconSelected("favorit")}
            theme={theme}
            disabled
            size="s"
            variant="content"
          >
            <StarIcon color={colorName} size={15} />
          </IconButton>
        </li>
        <li>
          <IconButton
            onClick={() => !!onItemClick && onItemClick("open")}
            selected={isIconSelected("open")}
            theme={theme}
            disabled
            size="s"
            variant="content"
          >
            <HandIcon color={colorName} size={15} />
          </IconButton>
        </li>
      </ul>
    </nav>
  );
};

export default AppFlyingMenu;
