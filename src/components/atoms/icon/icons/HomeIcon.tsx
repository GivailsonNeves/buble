import { IconProps } from "./index";

const HomeIcon = ({
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
    viewBox="0 0 43.559 39.081"
    {...props}
  >
    <path
      id="Path_206"
      data-name="Path 206"
      d="M13208.576,202.591v18.1h-10.609V205.739h-8.976v14.947h-10.667v-18.03h-5.693l21.085-21.043,22.474,20.978Z"
      transform="translate(-13172.631 -181.613)"
      fill={color}
    />
  </svg>
);

export default HomeIcon;
