import React from "react";
import { IconProps } from "./iconsInterface";

const IconPlus: React.FC<IconProps> = ({
  width = 12,
  height = 12,
  fill = "none",
  stroke = "#717784",
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
        d='M12 5.75V18.25'
        stroke={stroke}
        strokeWidth={rest?.strokeWidth || "1.25"}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M18.25 12H5.75'
        stroke={stroke}
        strokeWidth={rest?.strokeWidth || "1.25"}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default IconPlus;
