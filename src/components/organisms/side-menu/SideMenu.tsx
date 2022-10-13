import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Themes } from "../../../models/themes";
import Box from "../../atoms/box";
import Button from "../../atoms/button";
import { CloseIcon } from "../../atoms/icon";
import IconButton from "../../atoms/icon-button";
import PoweredBy from "../../atoms/powered-by";
import Screen from "../../atoms/screen";
import "./styles.scss";

interface Props {
  imgPath?: string;
  className?: string;
  theme?: Themes;
  open?: boolean;
  onClose?: () => void;
  onLogoClick?: () => void;
  onItemClick: (item: string) => void;
}

const SideMenu: React.FC<Props> = ({
  imgPath,
  className,
  open,
  onClose,
  onLogoClick,
  theme = Themes.light,
  onItemClick,
}) => {
  const [t] = useTranslation();

  const classNameValue = useMemo(() => {
    const classValues = ["app-side-menu", `theme--${theme.toString()}`];
    if (className) classValues.push(className);
    if (open) classValues.push("open");
    return classValues.join(" ");
  }, [className, theme, open]);

  return (
    <Screen className={classNameValue}>
      <Box className="header">
        <Box className="actions">
          <IconButton onClick={() => !!onClose && onClose()}>
            <CloseIcon size={16} color="white" />
          </IconButton>
        </Box>
        <Box className="content-area">
          <IconButton
            className="menuLogo"
            onClick={() => !!onLogoClick && onLogoClick()}
          >
            <img src={imgPath} alt="project Logo" />
          </IconButton>
        </Box>
      </Box>
      <Box className="list-links">
        <Button
          onClick={() => onItemClick("project")}
          variant={theme === Themes.light ? "gold" : "default"}
        >
          {t("The project")}
        </Button>
        <Button
          onClick={() => onItemClick("architects")}
          variant={theme === Themes.light ? "gold" : "default"}
        >
          {t("Architects")}
        </Button>
        <Button
          onClick={() => onItemClick("developers")}
          variant={theme === Themes.light ? "gold" : "default"}
        >
          {t("Developers")}
        </Button>
        <Button
          onClick={() => onItemClick("datasheet")}
          variant={theme === Themes.light ? "gold" : "default"}
        >
          {t("Datasheet")}
        </Button>
        <Button
          onClick={() => onItemClick("contact")}
          variant={theme === Themes.light ? "gold" : "default"}
        >
          {t("Contact")}
        </Button>
      </Box>
      <PoweredBy />
    </Screen>
  );
};

export default SideMenu;
