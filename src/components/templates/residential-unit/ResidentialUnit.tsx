import React, { useMemo } from "react";
import "./styles.scss";
import Screen from "../../atoms/screen";
import { Themes } from "../../../models/themes";
import Box from "../../atoms/box";
import Button from "../../atoms/button";
import { Link } from "../../../models/link";

interface Props {
  className?: string;
  theme?: Themes;
  links: Link[];
  onItemClick?: (link: Link) => void;
}

const ResidentialUnit: React.FC<Props> = ({
  className,
  theme = "light",
  links,
  onItemClick,
}) => {
  const classNameValue = useMemo(() => {
    const classValues = ["app-residential-unit", `theme--${theme}`];
    if (className) classValues.push(className);
    return classValues.join(" ");
  }, [className]);

  return (
    <Screen className={classNameValue}>
      <Box className="list-links">
        {links.map((l) => (
          <Button onClick={() => !!onItemClick && onItemClick(l)}>
            {l.text}
          </Button>
        ))}
      </Box>
    </Screen>
  );
};

export default ResidentialUnit;
