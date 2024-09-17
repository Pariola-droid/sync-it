import React from "react";
import { IconProps } from "./iconsInterface";

const IconDelete: React.FC<IconProps> = ({
  width = 20,
  height = 20,
  stroke,
}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 20 20'
      fill='none'
    >
      <path
        d='M5.625 6.45833L6.32596 14.5194C6.40085 15.3806 7.12185 16.0417 7.98636 16.0417H12.0136C12.8782 16.0417 13.5991 15.3806 13.674 14.5194L14.375 6.45833'
        stroke={stroke || "#FF1E1E"}
        strokeWidth='1.25'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M8.125 6.25V5.625C8.125 4.70453 8.87119 3.95833 9.79167 3.95833H10.2083C11.1288 3.95833 11.875 4.70453 11.875 5.625V6.25'
        stroke={stroke || "#FF1E1E"}
        strokeWidth='1.25'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M4.16675 6.45833H15.8334'
        stroke={stroke || "#FF1E1E"}
        strokeWidth='1.25'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default IconDelete;
