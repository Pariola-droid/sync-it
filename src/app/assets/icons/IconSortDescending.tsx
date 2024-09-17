import React from "react";
import { IconProps } from "./iconsInterface";

const IconSortDescending: React.FC<IconProps> = ({
  width = 20,
  height = 20,
  fill = "none",
  stroke = "D6D6D8",
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
        d='M7.70801 11.666L3.95801 11.666'
        stroke={stroke}
        strokeWidth='1.25'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M9.37467 15.209L3.95801 15.209'
        stroke={stroke}
        strokeWidth='1.25'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M6.87467 8.125L3.95801 8.125'
        stroke={stroke}
        strokeWidth='1.25'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M10.625 12.291L13.3333 15.2077L16.0417 12.291'
        stroke={stroke}
        strokeWidth='1.25'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M13.333 4.79102V15.2077'
        stroke={stroke}
        strokeWidth='1.25'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default IconSortDescending;
