import React from "react";
import { IconProps } from "./iconsInterface";

const IconHardDrive: React.FC<IconProps> = ({
  width = 20,
  height = 20,
  fill = "none",
  stroke = "#060606",
  ...rest
}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill='none'
      {...rest}
    >
      <path
        d='M3.95898 9.79199H16.0423V15.2087C16.0423 15.6689 15.6692 16.042 15.209 16.042H4.79232C4.33208 16.042 3.95898 15.6689 3.95898 15.2087V9.79199Z'
        stroke={stroke}
        strokeWidth='1.25'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M3.95898 11.6663V9.92198C3.95898 9.83542 3.97247 9.74938 3.99896 9.66697L5.64809 4.53633C5.75887 4.19171 6.07946 3.95801 6.44145 3.95801H13.5599C13.9218 3.95801 14.2424 4.19171 14.3532 4.53633L16.0023 9.66697C16.0288 9.74938 16.0423 9.83542 16.0423 9.92198V11.6663'
        stroke={stroke}
        strokeWidth='1.25'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M6.45898 12.708H7.70898'
        stroke={stroke}
        strokeWidth='1.25'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M10.625 12.708H13.5417'
        stroke={stroke}
        strokeWidth='1.25'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default IconHardDrive;
