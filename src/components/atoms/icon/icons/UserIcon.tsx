import { IconProps } from "./index";

const PenIcon = ({
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
    viewBox="0 0 41.299 49.542"
    {...props}
  >
    <g
      id="Group_219"
      data-name="Group 219"
      transform="translate(-3343.119 -176.112)"
    >
      <path
        id="Path_308"
        data-name="Path 308"
        d="M3363.749,225.654a29.413,29.413,0,0,1-20.367-8.165.592.592,0,0,1-.17-.815c3.484-7.411,9.237-11.9,17.327-13.186a22.345,22.345,0,0,1,23.814,13.313.427.427,0,0,1-.107.574,29.346,29.346,0,0,1-14.942,7.75A28.971,28.971,0,0,1,3363.749,225.654Z"
        fill="#fcfcfc"
      />
      <path
        id="Path_309"
        data-name="Path 309"
        d="M3351.973,187.9a11.785,11.785,0,1,1,11.758,11.805A11.794,11.794,0,0,1,3351.973,187.9Z"
        fill="#fcfcfc"
      />
    </g>
  </svg>
);

export default PenIcon;
