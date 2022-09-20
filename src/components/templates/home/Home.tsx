import React, { useMemo } from "react";
import Box from "../../atoms/box";
import { LocationIcon } from "../../atoms/icon";
import Screen from "../../atoms/screen";
import Typography from "../../atoms/typography";
import AppMenu from "../../organisms/app-menu";
import { HeaderMode } from "../../organisms/app-menu/AppMenu";
import "./styles.scss";

import HomeBackground from "../../../assets/imgs/home_bg.png";
import BubbleLogo from "../../../assets/imgs/icons/logo_bubble.svg";
import Joinville from "../../../assets/imgs/joinville.png";
import Kelowna from "../../../assets/imgs/kelowna.png";
import Button from "../../atoms/button";

interface Props {
  children: React.ReactNode;
  className: string;
}

const Home: React.FC<Props> = ({ children, className }) => {
  const classNameValue = useMemo(() => {
    const classValues = ["app-home"];
    if (className) classValues.push(className);
    return classValues.join(" ");
  }, [className]);

  return (
    <>
      <img className="opacityBG" src={HomeBackground} alt="home" />
      <Screen className={classNameValue}>
        <AppMenu mode={HeaderMode.user} />
        <Box className="high-light">
          <LocationIcon size={18} />
          <Typography color="white">Miami - FL/USA</Typography>
        </Box>
        <Box>
          <Button onClick={() => {}} round variant="red">
            play
          </Button>
        </Box>
        <Box>
          <Typography color="white">
            fresh new <img src={BubbleLogo} alt="bubbles" />
          </Typography>
        </Box>
        <Box className="buildings">
          <Box>
            <a href="#">
              <img src={Joinville} alt="Joinville" />
              <span>
                <span>
                  <LocationIcon size={16} color="red" />
                  <Typography color="white">Miami - FL/USA</Typography>
                </span>
                <img src={BubbleLogo} alt="bubbles" />
              </span>
            </a>
          </Box>
          <Box>
            <a href="#">
              <img src={Kelowna} alt="Kelowna" />
              <span>
                <span>
                  <LocationIcon size={16} color="red" />
                  <Typography color="white">Miami - FL/USA</Typography>
                </span>
                <img src={BubbleLogo} alt="bubbles" />
              </span>
            </a>
          </Box>
        </Box>
      </Screen>
    </>
  );
};

export default Home;
