import React from "react";
import { IconProps } from "./iconsInterface";

const IconSortAscending: React.FC<IconProps> = ({
  width = 20,
  height = 20,
  fill = "none",
  stroke = "white",
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
        d='M7.70312 8.33203L3.95312 8.33203'
        stroke={stroke}
        strokeWidth={rest?.strokeWidth || 1.25}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M9.36979 4.79297L3.95312 4.79297'
        stroke={stroke}
        strokeWidth={rest?.strokeWidth || 1.25}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M6.86979 11.875L3.95312 11.875'
        stroke={stroke}
        strokeWidth={rest?.strokeWidth || 1.25}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M13.5 7.08203V13.7487'
        stroke={stroke}
        strokeWidth={rest?.strokeWidth || 1.25}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M10 10.3125H16.6667'
        stroke={stroke}
        strokeWidth={rest?.strokeWidth || 1.25}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default IconSortAscending;
