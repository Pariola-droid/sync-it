import React from "react";
import { IconProps } from "./iconsInterface";

const IconReplyInverse: React.FC<IconProps> = ({
  width = 14,
  height = 14,
  fill = "none",
  stroke = "#060606",
  ...rest
}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 14 14'
      fill='none'
      {...rest}
    >
      <path
        d='M13.041 6.16671L7.62435 0.958374V4.70837C0.957683 4.70837 0.957683 9.50004 0.957683 13.0417C2.83268 7.83337 7.62435 7.62504 7.62435 7.62504V11.375L13.041 6.16671Z'
        stroke={stroke}
        strokeWidth='1.25'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default IconReplyInverse;
