import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import Screen from "../../atoms/screen";

import "./styles.scss";

import { useTranslation } from "react-i18next";

interface Props {
  className?: string;
  building: any;
}

const Pictures: React.FC<Props> = ({ className, building }) => {
  const classNameValue = useMemo(() => {
    const classValues = ["app-pictures"];
    if (className) classValues.push(className);
    return classValues.join(" ");
  }, [className]);

  const [t] = useTranslation();

  return (
    <Screen className={classNameValue} backgronImgPath={building.background}>
      <ul>
        <li>
          <Link to={`/building/gallery/${building.id}`}>/{t("Gallery")}</Link>
        </li>
        <li>
          <Link className="disabled" to="/gallery">
            /{t("Live")}
          </Link>
        </li>
        <li>
          <Link to={`/building/plans/${building.id}`}>/{t("Floor Plans")}</Link>
        </li>
        <li>
          <Link className="disabled" to="/gallery">
            /{t("Insolation")}
          </Link>
        </li>
      </ul>
    </Screen>
  );
};

export default Pictures;
