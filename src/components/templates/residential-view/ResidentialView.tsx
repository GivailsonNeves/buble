import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Themes } from "../../../models/themes";
import Box from "../../atoms/box";
import Button from "../../atoms/button";
import Screen from "../../atoms/screen";
import "./styles.scss";

interface Props {
  className?: string;
  theme?: Themes;
  building: any;
}

const ResidentialView: React.FC<Props> = ({
  theme = "light",
  className,
  building,
}) => {
  const [t] = useTranslation();
  const classNameValue = useMemo(() => {
    const classValues = ["app-residential-view", `theme--${theme.toString()}`];
    if (className) classValues.push(className);
    return classValues.join(" ");
  }, [className]);

  return (
    <Screen className={classNameValue}>
      <Box className="content">
        <div style={{ padding: "1rem 0" }}>{building.description}</div>
        <div style={{ padding: "1rem 0" }}>{building.description}</div>
        <div style={{ padding: "1rem 0" }}>{building.description}</div>
      </Box>
      <Box className="contrls">
        <Button variant={theme === Themes.light ? "grey" : "dark"}>
          {t("Previus")}
        </Button>
        <Button variant={theme === Themes.light ? "grey" : "dark"}>
          {t("Next")}
        </Button>
      </Box>
    </Screen>
  );
};

export default ResidentialView;
