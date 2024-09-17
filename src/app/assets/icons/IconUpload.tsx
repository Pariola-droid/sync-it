import React from "react";
import { IconProps } from "./iconsInterface";

const IconUpload: React.FC<IconProps> = ({
  width = 20,
  height = 20,
  fill = "none",
  stroke,
  ...rest
}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 20 20'
      fill='none'
      {...rest}
    >
      <path
        d='M3.95801 12.291V13.541C3.95801 14.9218 5.0773 16.041 6.45801 16.041H13.5413C14.9221 16.041 16.0413 14.9218 16.0413 13.541V12.291'
        stroke={stroke || "white"}
        strokeWidth='1.25'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M10 11.8743V4.16602'
        stroke={stroke || "white"}
        strokeWidth='1.25'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M7.29199 6.87565L10.0003 3.95898L12.7087 6.87565'
        stroke={stroke || "white"}
        strokeWidth='1.25'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default IconUpload;
