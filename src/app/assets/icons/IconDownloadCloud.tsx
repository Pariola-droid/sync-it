import React from "react";
import { IconProps } from "./iconsInterface";

const IconDownloadCloud: React.FC<IconProps> = ({
  width = 20,
  height = 21,
  fill = "none",
  stroke = "#060606",
  ...rest
}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='20'
      height='20'
      viewBox='0 0 20 21'
      fill='none'
      {...rest}
    >
      <path
        d='M5.20898 12.3752C5.20898 12.3752 3.95898 12.1668 3.95898 10.5002C3.95898 9.07259 5.0635 7.90299 6.46458 7.7993C6.56872 5.93674 8.11205 4.4585 10.0007 4.4585C11.8893 4.4585 13.4326 5.93675 13.5367 7.79931C14.9378 7.90299 16.0423 9.07259 16.0423 10.5002C16.0423 12.1668 14.7923 12.3752 14.7923 12.3752'
        stroke={stroke}
        strokeWidth='1.25'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M11.875 14.4585L10 16.5418L8.125 14.4585'
        stroke={stroke}
        strokeWidth='1.25'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M10 15.7083V11.125'
        stroke={stroke}
        strokeWidth='1.25'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default IconDownloadCloud;
