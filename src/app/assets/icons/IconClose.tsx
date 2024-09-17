import React from "react";
import { IconProps } from "./iconsInterface";

const IconClose: React.FC<IconProps> = ({
  width = 20,
  height = 20,
  fill = "none",
  ...rest
}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 20 20'
      fill={fill}
      {...rest}
    >
      <path
        d='M14.375 5.625L5.625 14.375'
        stroke={rest?.stroke || "#D6D6D8"}
        strokeWidth={rest?.strokeWidth || "1.5"}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M5.625 5.625L14.375 14.375'
        stroke={rest?.stroke || "#D6D6D8"}
        strokeWidth={rest?.strokeWidth || "1.5"}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default IconClose;
