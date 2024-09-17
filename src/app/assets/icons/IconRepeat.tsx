import React from "react";
import { IconProps } from "./iconsInterface";

const IconRepeat: React.FC<IconProps> = ({
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
      fill='none'
      {...rest}
    >
      <path
        stroke={rest?.stroke || "#060606"}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={rest?.strokeWidth || 1.25}
        d='m13.958 3.958 2.084 1.875-2.084 1.875M6.042 16.042l-2.084-1.875 2.084-1.875'
      />
      <path
        stroke={rest?.stroke || "#060606"}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={rest?.strokeWidth || 1.25}
        d='M15.417 5.833H8.125A4.167 4.167 0 0 0 3.958 10v.208M4.792 14.167h7.083A4.167 4.167 0 0 0 16.042 10v-.208'
      />
    </svg>
  );
};

export default IconRepeat;
