import React from "react";
import { IconProps } from "./iconsInterface";

const IconClock: React.FC<IconProps> = ({
  width = 20,
  height = 20,
  fill = "none",
  stroke,
  ...rest
}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      {...rest}
    >
      <path
        d='M16.0416 10C16.0416 13.3367 13.3366 16.0417 9.99992 16.0417C6.6632 16.0417 3.95825 13.3367 3.95825 10C3.95825 6.66328 6.6632 3.95834 9.99992 3.95834C13.3366 3.95834 16.0416 6.66328 16.0416 10Z'
        stroke='white'
        strokeWidth='1.25'
      />
      <path
        d='M10 6.66666V10L11.6667 11.6667'
        stroke='white'
        strokeWidth='1.25'
        strokeLinecap='round'
      />
    </svg>
  );
};

export default IconClock;
