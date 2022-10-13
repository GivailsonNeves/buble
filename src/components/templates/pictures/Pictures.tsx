import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import Screen from "../../atoms/screen";

import "./styles.scss";

import { useTranslation } from "react-i18next";

interface Props {
  className?: string;
  backgronImgPath: string;
}

const Pictures: React.FC<Props> = ({ className, backgronImgPath }) => {
  const classNameValue = useMemo(() => {
    const classValues = ["app-pictures"];
    if (className) classValues.push(className);
    return classValues.join(" ");
  }, [className]);

  const [t] = useTranslation();

  return (
    <Screen className={classNameValue} backgronImgPath={backgronImgPath}>
      <ul>
        <li>
          <Link to="/gallery">/{t("Gallery")}</Link>
        </li>
        <li>
          <Link to="/gallery">/{t("Live")}</Link>
        </li>
        <li>
          <Link to="/gallery">/{t("Floor Plans")}</Link>
        </li>
        <li>
          <Link to="/gallery">/{t("Insolation")}</Link>
        </li>
      </ul>
    </Screen>
  );
};

export default Pictures;
