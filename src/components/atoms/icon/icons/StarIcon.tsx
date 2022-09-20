import { IconProps } from "./index";

const StarIcon = ({
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
    viewBox="0 0 56.793 54.039"
    {...props}
  >
    <g id="jCewy6" transform="translate(-940.626 -6631.785)">
      <g id="Group_62" data-name="Group 62">
        <path
          id="Path_59"
          data-name="Path 59"
          d="M940.626,6652.452q4.955-.794,9.91-1.586,4.6-.732,9.2-1.446c.384-.059.5-.333.641-.615q2.723-5.466,5.445-10.933c.94-1.888,1.873-3.78,2.814-5.668.078-.158.1-.409.311-.419s.246.248.324.4q3.693,7.245,7.377,14.5c.377.742.767,1.478,1.139,2.223a.7.7,0,0,0,.589.42q8.67,1.264,17.335,2.553c.457.068.913.141,1.37.211.126.02.283.006.327.157s-.1.227-.18.319c-.1.109-.208.211-.313.316q-6.4,6.4-12.81,12.789A1.336,1.336,0,0,0,983.7,6667q1.542,8.963,3.041,17.933a1.363,1.363,0,0,1,.023.221c0,.157.139.351-.038.461-.158.1-.316-.046-.459-.119q-3.34-1.7-6.679-3.4-5-2.547-9.986-5.1a.851.851,0,0,0-.878.022q-8.187,4.287-16.383,8.561a2.2,2.2,0,0,1-.2.106c-.147.059-.294.222-.455.092-.135-.11-.031-.278-.009-.419q.707-4.493,1.416-8.983c.5-3.158.991-6.318,1.509-9.473a.976.976,0,0,0-.342-.964q-6.827-6.678-13.636-13.373Z"
        />
      </g>
    </g>
  </svg>
);

export default StarIcon;