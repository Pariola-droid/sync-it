import React from "react";
import { IconProps } from "./iconsInterface";

const IconCursorText: React.FC<IconProps> = ({
  width = 20,
  height = 20,
  fill = "none",
  stroke = "D6D6D8",
  ...rest
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...rest}
    >
      <path
        d='M14.167 15.209V4.79232M14.167 15.209C14.167 16.0423 12.292 16.0423 12.292 16.0423M14.167 15.209C14.167 16.0423 16.042 16.0423 16.042 16.0423M14.167 4.79232C14.167 3.95898 12.292 3.95898 12.292 3.95898M14.167 4.79232C14.167 3.95898 16.042 3.95898 16.042 3.95898'
        stroke={stroke}
        strokeWidth='1.25'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M13.125 10.209H15.2083'
        stroke={stroke}
        strokeWidth='1.25'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M3.95801 13.5423L6.66634 6.45898L9.37467 13.5423'
        stroke={stroke}
        strokeWidth='1.25'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M5 11.041H8.33333'
        stroke={stroke}
        strokeWidth='1.25'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default IconCursorText;
