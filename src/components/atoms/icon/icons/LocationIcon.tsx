import { IconProps } from "./index";

const LocationIcon = ({
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
    viewBox="0 0 43.286 61.816"
    {...props}
  >
    <g
      id="_3qtgN4"
      data-name="3qtgN4"
      transform="translate(-948.681 -6246.303)"
    >
      <g id="Group_56" data-name="Group 56">
        <path
          id="Path_53"
          data-name="Path 53"
          d="M991.96,6268.86a19.484,19.484,0,0,1-2.989,10.131c-5.627,9.531-11.618,18.834-17.574,28.16-.825,1.291-1.293,1.292-2.118,0-5.957-9.325-12.008-18.594-17.557-28.17a21.621,21.621,0,0,1,33.485-26.7C989.7,6256.476,991.987,6261.772,991.96,6268.86Zm-21.642,8.363a9.148,9.148,0,0,0,9.279-9.291,9.259,9.259,0,0,0-18.518-.04A9.149,9.149,0,0,0,970.318,6277.223Z"
        />
      </g>
    </g>
  </svg>
);

export default LocationIcon;
