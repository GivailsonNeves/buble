import React, { useMemo } from "react";
import { Themes } from "../../../models/themes";
import Box from "../../atoms/box";
import BubleHeader from "../../atoms/buble-header";
import Button from "../../atoms/button";
import Screen from "../../atoms/screen";
import "./styles.scss";

interface Props {
  children: React.ReactNode;
  className: string;
  imgPath: string;
  theme: Themes;
  onStart: () => void;
}

const Start: React.FC<Props> = ({
  children,
  className,
  onStart,
  theme = "light",
  imgPath,
}) => {
  const classNameValue = useMemo(() => {
    const classValues = ["app-start", `theme--${theme}`];
    if (className) classValues.push(className);
    return classValues.join(" ");
  }, [className, theme]);

  return (
    <Screen className={classNameValue}>
      <BubleHeader />
      <Box className="content-area">
        <img src={imgPath} alt="project Logo" />
        <Box className="">{children}</Box>
      </Box>
      <Box className="list-links">
        <Button
          variant={theme === Themes.light ? "gold" : "default"}
          onClick={() => !!onStart && onStart()}
        >
          start the journey
        </Button>
      </Box>
    </Screen>
  );
};

export default Start;
