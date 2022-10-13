import React, { useMemo } from "react";
import { useAppContext } from "../../../context/AppContext";
import AppModal from "../../atoms/app-modal";
import "./styles.scss";

interface Props {
  className?: string;
}

const AppMapView: React.FC<Props> = ({ className }) => {
  const {
    building: { htmlMapEmbed },
  } = useAppContext();

  const classNameValue = useMemo(() => {
    const classValues = ["app-app-map-view"];
    if (className) classValues.push(className);
    return classValues.join(" ");
  }, [className]);

  return (
    <AppModal className={classNameValue}>
      <iframe
        src={htmlMapEmbed}
        style={{ border: 0, width: "100vw", height: "100vh" }}
        loading="lazy"
      ></iframe>
    </AppModal>
  );
};

export default AppMapView;
