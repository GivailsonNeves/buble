import React from "react";

interface Props {
  type?:
    | "title"
    | "sub-title"
    | "section-title"
    | "section-sub-title"
    | "text"
    | "small";
  color?:
    | "default"
    | "gold"
    | "grey"
    | "dark"
    | "red"
    | "red-inverted"
    | "white";
  children?: React.ReactNode;
}

const Typography: React.FC<Props> = ({
  type = "text",
  color = "dark",
  children,
}) => {
  const TextContainer = ({
    children,
    ...rest
  }: {
    children: React.ReactNode;
    style: any;
  }) => {
    const classNameValue = `app-typography ${color}`;
    if (type === "title")
      return (
        <h1 className={classNameValue} {...rest}>
          {children}
        </h1>
      );
    if (type === "sub-title")
      return (
        <h2 className={classNameValue} {...rest}>
          {children}
        </h2>
      );
    if (type === "section-title")
      return (
        <h3 className={classNameValue} {...rest}>
          {children}
        </h3>
      );
    if (type === "section-sub-title")
      return (
        <h4 className={classNameValue} {...rest}>
          {children}
        </h4>
      );
    if (type === "small")
      return (
        <p className={classNameValue} {...rest}>
          <small>{children}</small>
        </p>
      );
    return (
      <p className={classNameValue} {...rest}>
        {children}
      </p>
    );
  };
  return (
    <TextContainer style={{ color: `var(--color-${color})` }}>
      {children}
    </TextContainer>
  );
};

export default Typography;
