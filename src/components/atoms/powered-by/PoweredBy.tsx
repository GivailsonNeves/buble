import React, { useMemo } from "react";
import Typography from "../typography";
import "./styles.scss";

interface Props {
  className?: string;
}

const PoweredBy: React.FC<Props> = ({ className }) => {
  const classNameValue = useMemo(() => {
    const classValues = ["app-powered-by"];
    if (className) classValues.push(className);
    return classValues.join(" ");
  }, [className]);

  return (
    <div className={classNameValue}>
      <Typography color="white" type="small">
        Powered by Elephantskin <br />
        All Rights Reserved to Eelphant Skin Group Corp.
      </Typography>
    </div>
  );
};

export default PoweredBy;
