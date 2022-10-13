import React, { useMemo } from "react";
import AppModal from "../../atoms/app-modal";
import ThreeSixty from "react-360-view";
import "./styles.scss";
import { useAppContext } from "../../../context/AppContext";

interface Props {
  className?: string;
}

const App360View: React.FC<Props> = ({ className }) => {
  const {
    building: { view360Data },
  } = useAppContext();

  const classNameValue = useMemo(() => {
    const classValues = ["app-app-360-view"];
    if (className) classValues.push(className);
    return classValues.join(" ");
  }, [className]);

  return (
    <AppModal className={classNameValue}>
      <ThreeSixty {...view360Data} />
    </AppModal>
  );
};

export default App360View;
