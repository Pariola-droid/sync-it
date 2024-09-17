import React from "react";
import { IconProps } from "./iconsInterface";

const IconCheckMark: React.FC<IconProps> = ({
  width = 12,
  height = 10,
  fill = "none",
  stroke = "#060606",
  ...rest
}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 12 10'
      fill={fill}
      {...rest}
    >
      <path
        d='M0.789062 5.72208L2.94735 8.67817C3.62382 9.60467 5.01231 9.58667 5.66456 8.64292L11.2057 0.625'
        stroke={stroke}
        strokeWidth={rest?.strokeWidth || "1.25"}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default IconCheckMark;
