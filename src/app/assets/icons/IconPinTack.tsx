import React from "react";
import { IconProps } from "./iconsInterface";

const IconPinTack: React.FC<IconProps> = ({
  width = 13,
  height = 16,
  fill = "none",
  stroke,
  ...rest
}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 13 16'
      fill={fill}
      {...rest}
    >
      <g opacity='0.4'>
        <path
          d='M4.73962 5.16666L4.19796 3.16666H8.80212L8.26046 5.16666V6.66666C9.88546 7.33332 9.88546 9.49999 9.88546 9.49999H3.11462C3.11462 9.49999 3.11462 7.33332 4.73962 6.66666V5.16666Z'
          stroke={stroke || "#060606"}
          strokeWidth={rest?.strokeWidth || "1.25"}
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M6.5 9.66666V12.8333'
          stroke={stroke || "#060606"}
          strokeWidth={rest?.strokeWidth || "1.25"}
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </g>
    </svg>
  );
};

export default IconPinTack;
