import React from "react";
import { IconProps } from "./iconsInterface";

const IconGrid: React.FC<IconProps> = ({
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
      fill={fill}
      {...rest}
    >
      <path
        d='M3.95801 4.79232C3.95801 4.33208 4.3311 3.95898 4.79134 3.95898H7.70801C8.16824 3.95898 8.54134 4.33208 8.54134 4.79232V7.70898C8.54134 8.16922 8.16824 8.54232 7.70801 8.54232H4.79134C4.3311 8.54232 3.95801 8.16922 3.95801 7.70898V4.79232Z'
        stroke={stroke}
        strokeWidth='1.25'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M3.95801 12.2923C3.95801 11.8321 4.3311 11.459 4.79134 11.459H7.70801C8.16824 11.459 8.54134 11.8321 8.54134 12.2923V15.209C8.54134 15.6692 8.16824 16.0423 7.70801 16.0423H4.79134C4.3311 16.0423 3.95801 15.6692 3.95801 15.209V12.2923Z'
        stroke={stroke}
        strokeWidth='1.25'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M11.458 4.79232C11.458 4.33208 11.8311 3.95898 12.2913 3.95898H15.208C15.6682 3.95898 16.0413 4.33208 16.0413 4.79232V7.70898C16.0413 8.16922 15.6682 8.54232 15.208 8.54232H12.2913C11.8311 8.54232 11.458 8.16922 11.458 7.70898V4.79232Z'
        stroke={stroke}
        strokeWidth='1.25'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M11.458 12.2923C11.458 11.8321 11.8311 11.459 12.2913 11.459H15.208C15.6682 11.459 16.0413 11.8321 16.0413 12.2923V15.209C16.0413 15.6692 15.6682 16.0423 15.208 16.0423H12.2913C11.8311 16.0423 11.458 15.6692 11.458 15.209V12.2923Z'
        stroke={stroke}
        strokeWidth='1.25'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default IconGrid;
