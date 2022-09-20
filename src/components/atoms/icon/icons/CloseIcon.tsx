import { IconProps } from "./index";

const CloseIcon = ({
  size = 60,
  color = "white",
  className,
  ...props
}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={size}
    width={size}
    className={className}
    fill={color}
    viewBox="0 0 47.839 47.107"
    {...props}
  >
    <g
      id="Group_145"
      data-name="Group 145"
      transform="translate(-991.347 -4730.207)"
    >
      <rect
        id="Rectangle_201"
        data-name="Rectangle 201"
        width="59.328"
        height="7.292"
        transform="translate(997.235 4730.207) rotate(45)"
        fill={color}
      />
      <rect
        id="Rectangle_202"
        data-name="Rectangle 202"
        width="59.328"
        height="7.292"
        transform="translate(1038.454 4735.363) rotate(135)"
        fill={color}
      />
    </g>
  </svg>
);

export default CloseIcon;
