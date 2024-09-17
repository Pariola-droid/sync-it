import React from "react";
import { IconProps } from "./iconsInterface";

const IconEdit: React.FC<IconProps> = ({
  width = 24,
  height = 24,
  fill = "none",
  stroke = "#060606",
  ...rest
}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 24 24'
      fill='none'
      {...rest}
    >
      <path
        d='M3.96094 16.0415L7.5026 15.2082L15.2467 7.46413C15.5721 7.13869 15.5721 6.61106 15.2467 6.28562L13.7169 4.7558C13.3914 4.43036 12.8638 4.43036 12.5383 4.7558L4.79427 12.4999L3.96094 16.0415Z'
        stroke={stroke}
        strokeWidth={rest?.strokeWidth || "1.25"}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M16.0443 16.043H11.4609'
        stroke={stroke}
        strokeWidth={rest?.strokeWidth || "1.25"}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default IconEdit;
