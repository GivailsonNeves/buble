import React, { useMemo } from "react";
import "./styles.scss";
import Screen from "../../atoms/screen";
import PoweredBy from "../../atoms/powered-by";
import Box from "../../atoms/box";
import IconButton from "../../atoms/icon-button";
import { CloseIcon } from "../../atoms/icon";
import { Link } from "../../../models/link";
import { Themes } from "../../../models/themes";
import Button from "../../atoms/button";

interface Props {
  imgPath?: string;
  className?: string;
  links: Link[];
  theme?: Themes;
  open?: boolean;
  onClose?: () => void;
  onItemClick?: (link: Link) => void;
}

const SideMenu: React.FC<Props> = ({
  imgPath,
  className,
  links,
  onClose,
  theme = Themes.light,
  onItemClick,
}) => {
  const classNameValue = useMemo(() => {
    const classValues = ["app-side-menu", `theme--${theme.toString()}`];
    if (className) classValues.push(className);
    return classValues.join(" ");
  }, [className, theme]);

  return (
    <Screen className={classNameValue}>
      <Box className="header">
        <Box className="actions">
          <IconButton onClick={() => !!onClose && onClose()}>
            <CloseIcon size={16} color="white" />
          </IconButton>
        </Box>
        <Box className="content-area">
          <img src={imgPath} alt="project Logo" />
        </Box>
      </Box>
      <Box className="list-links">
        {links.map((l) => (
          <Button
            variant={theme === Themes.light ? "gold" : "default"}
            onClick={() => !!onItemClick && onItemClick(l)}
          >
            {l.text}
          </Button>
        ))}
      </Box>
      <PoweredBy />
    </Screen>
  );
};

export default SideMenu;
