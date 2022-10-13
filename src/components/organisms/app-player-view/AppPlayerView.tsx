import React, { useMemo } from "react";
import AppModal from "../../atoms/app-modal";
import ReactPlayer from "react-player";
import "./styles.scss";
import { useAppContext } from "../../../context/AppContext";

interface Props {
  className?: string;
}

const AppPlayerView: React.FC<Props> = ({ className }) => {
  const {
    building: { videUrl },
  } = useAppContext();

  const classNameValue = useMemo(() => {
    const classValues = ["app-app-player-view"];
    if (className) classValues.push(className);
    return classValues.join(" ");
  }, [className]);
  console.log(videUrl);

  return (
    <AppModal className={classNameValue}>
      {videUrl && (
        <ReactPlayer
          width="100vw"
          playing={true}
          height="100vh"
          url={videUrl}
          config={{
            youtube: {
              playerVars: {
                showInfo: 0,
                autoplay: 1,
                playsinline: 0,
                controls: 0,
                loop: 99,
                modestbranding: 1,
                rel: 0,
              },
            },
          }}
        />
      )}
    </AppModal>
  );
};

export default AppPlayerView;
