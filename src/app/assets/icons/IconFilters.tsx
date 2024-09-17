import React from "react";
import { IconProps } from "./iconsInterface";

const IconFilters: React.FC<IconProps> = ({
  width = 25,
  height = 24,
  stroke = "#060606",
  ...rest
}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={20}
      height={20}
      viewBox={`0 0 20 20`}
      {...rest}
    >
      <path
        d='M3.95898 6.45703H16.0423'
        stroke={stroke}
        strokeWidth={rest?.strokeWidth ?? "1.25"}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M5.625 9.79297H14.375'
        stroke={stroke}
        strokeWidth={rest?.strokeWidth ?? "1.25"}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M7.29102 13.125H12.7077'
        stroke={stroke}
        strokeWidth={rest?.strokeWidth ?? "1.25"}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default IconFilters;
