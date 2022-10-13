import React, { useMemo } from "react";
import Box from "../../atoms/box";
import { LocationIcon } from "../../atoms/icon";
import Screen from "../../atoms/screen";
import Typography from "../../atoms/typography";
import "./styles.scss";

import { useTranslation } from "react-i18next";
import HomeBackground from "../../../assets/imgs/home_bg.png";
import BubbleLogo from "../../../assets/imgs/icons/logo_bubble.svg";
import Button from "../../atoms/button";

interface Props {
  className?: string;
  data: any[];
  onStart: (id: string) => void;
}

const Home: React.FC<Props> = ({ className, onStart, data }) => {
  const [t] = useTranslation();

  const [highLight, ...buildings] = data;

  const classNameValue = useMemo(() => {
    const classValues = ["app-home"];
    if (className) classValues.push(className);
    return classValues.join(" ");
  }, [className]);

  return (
    <Screen className={classNameValue} backgronImgPath={HomeBackground}>
      <Box className="high-light">
        <LocationIcon size={18} />
        <Typography color="white">
          {highLight.city} - {highLight.state}/{highLight.country}
        </Typography>
      </Box>
      <Box>
        <Button
          onClick={() => {
            onStart(highLight.id);
          }}
          round
          variant="red"
        >
          {t("play")}
        </Button>
      </Box>
      <Box>
        <Typography color="white">
          {t("fresh new")} <img src={BubbleLogo} alt="bubbles" />
        </Typography>
      </Box>
      <Box className="buildings">
        {buildings.map((b) => (
          <Box key={b.id}>
            <a
              onClick={() => {
                onStart(b.id);
                return false;
              }}
            >
              <img src={b.bubleIcon} alt={b.city} />
              <span>
                <span>
                  <LocationIcon size={16} color="red" />
                  <Typography color="white">
                    {b.city} - {b.state}/{b.country}
                  </Typography>
                </span>
                <img src={b.logo} alt={b.name} />
              </span>
            </a>
          </Box>
        ))}
      </Box>
    </Screen>
  );
};

export default Home;
