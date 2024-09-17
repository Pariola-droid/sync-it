import React from "react";
import { IconProps } from "./iconsInterface";

const IconDownload: React.FC<IconProps> = ({
  width = 20,
  height = 20,
  fill = "none",
  stroke,
  ...rest
}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      {...rest}
    >
      <path
        d='M3.95825 12.2917V13.5417C3.95825 14.9224 5.07754 16.0417 6.45825 16.0417H13.5416C14.9223 16.0417 16.0416 14.9224 16.0416 13.5417V12.2917'
        stroke='white'
        strokeWidth='1.25'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M10 11.875L10 3.95833'
        stroke='white'
        strokeWidth='1.25'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M7.29175 8.95833L10.0001 11.875L12.7084 8.95833'
        stroke='white'
        strokeWidth='1.25'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default IconDownload;
