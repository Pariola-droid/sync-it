import React from "react";
import { IconProps } from "./iconsInterface";

const IconHardDrive2: React.FC<IconProps> = ({
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
        d='M3.95801 13.3333C3.95801 11.8376 5.17057 10.625 6.66634 10.625H13.333C14.8288 10.625 16.0413 11.8376 16.0413 13.3333C16.0413 14.8291 14.8288 16.0417 13.333 16.0417H6.66634C5.17057 16.0417 3.95801 14.8291 3.95801 13.3333Z'
        stroke={stroke}
        strokeWidth='1.25'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M7.08333 13.3327C7.08333 13.5628 6.89679 13.7493 6.66667 13.7493C6.43655 13.7493 6.25 13.5628 6.25 13.3327C6.25 13.1026 6.43655 12.916 6.66667 12.916C6.89679 12.916 7.08333 13.1026 7.08333 13.3327Z'
        stroke={stroke}
        strokeWidth='0.833333'
      />
      <path
        d='M3.95801 13.334V11.9097C3.95801 11.3339 4.03262 10.7605 4.17997 10.2038L5.50473 5.19916C5.69824 4.46812 6.35968 3.95898 7.1159 3.95898H12.8834C13.6397 3.95898 14.3011 4.46812 14.4946 5.19916L15.8194 10.2038C15.9667 10.7605 16.0413 11.3339 16.0413 11.9097V13.334'
        stroke={stroke}
        strokeWidth='1.25'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M10.625 13.334H13.5417'
        stroke={stroke}
        strokeWidth='1.25'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default IconHardDrive2;
