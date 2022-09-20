import { IconProps } from "./index";

const PlayIcon = ({
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
    viewBox="0 0 33.133 47.903"
    {...props}
  >
    <path
      id="Path_52"
      data-name="Path 52"
      d="M993.5,6084.333l-33.133-23.952v47.9Z"
      transform="translate(-960.368 -6060.382)"
    />
  </svg>
);

export default PlayIcon;
