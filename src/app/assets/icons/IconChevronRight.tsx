import React from "react";
import { IconProps } from "./iconsInterface";

const IconChevronRight: React.FC<IconProps> = ({
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
      viewBox='0 0 20 20'
      fill={fill}
      className={rest?.className}
      {...rest}
    >
      <path
        d='M8.95852 12.7085L11.8752 10.0002L8.95852 7.29183'
        stroke={stroke}
        strokeWidth={rest?.strokeWidth || "1.25"}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default IconChevronRight;
