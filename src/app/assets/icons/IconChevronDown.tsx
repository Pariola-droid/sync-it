import React from "react";
import { IconProps } from "./iconsInterface";

const IconChevronDown: React.FC<IconProps> = ({
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
      viewBox={`0 0 20 20`}
      fill={fill}
      {...rest}
    >
      <path
        d='M13.2083 8.95834L10.5 11.875L7.79163 8.95834'
        stroke={stroke}
        strokeWidth={rest?.strokeWidth || "1.5"}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default IconChevronDown;
