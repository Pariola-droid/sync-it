import React from "react";
import { IconProps } from "./iconsInterface";

const IconEnterKey: React.FC<IconProps> = ({
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
      viewBox={`0 0 20 20`}
      fill='none'
      {...rest}
    >
      <path
        d='M17.25 6.75V12C17.25 13.1046 16.3546 14 15.25 14H6.75M6.75 14L10.25 10.75M6.75 14L10.25 17.25'
        stroke={stroke}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default IconEnterKey;
