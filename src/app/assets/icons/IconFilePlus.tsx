import React from "react";
import { IconProps } from "./iconsInterface";

const IconFilePlus: React.FC<IconProps> = ({
  width = 24,
  height = 24,
  fill = "none",
  stroke = "#060606",
  ...rest
}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 24 24'
      fill='none'
      {...rest}
    >
      <path
        d='M11.25 19.25H7.75C6.64543 19.25 5.75 18.3546 5.75 17.25V6.75C5.75 5.64543 6.64543 4.75 7.75 4.75H14L18.25 9V11.25'
        stroke={stroke}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M17 14.75V19.25'
        stroke={stroke}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M19.25 17H14.75'
        stroke={stroke}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M18 9.25H13.75V5'
        stroke={stroke}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default IconFilePlus;
