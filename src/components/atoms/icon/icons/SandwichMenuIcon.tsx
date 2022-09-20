import { IconProps } from "./index";

const SandwichMenuIcon = ({
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
    viewBox="0 0 59.328 39.081"
    {...props}
  >
    <g
      id="Group_247"
      data-name="Group 247"
      transform="translate(-973.525 -181.613)"
    >
      <rect
        id="Rectangle_281"
        data-name="Rectangle 281"
        width="59.328"
        height="7.292"
        transform="translate(973.525 181.613)"
        fill={color}
      />
      <rect
        id="Rectangle_282"
        data-name="Rectangle 282"
        width="59.328"
        height="7.292"
        transform="translate(973.525 213.402)"
        fill={color}
      />
    </g>
  </svg>
);

export default SandwichMenuIcon;
