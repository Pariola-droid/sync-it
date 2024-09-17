import React from "react";
import { IconProps } from "./iconsInterface";

const IconStack: React.FC<IconProps> = ({
  width = 16,
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
      viewBox={`0 0 16 16`}
      fill={fill}
      {...rest}
    >
      <g opacity='0.4'>
        <path
          d='M13.5877 4.30156L8.92017 2.17344C8.41423 1.94219 7.58611 1.94219 7.08017 2.17344L2.4158 4.30156C1.8658 4.55156 1.8658 4.96063 2.4158 5.21063L7.0408 7.32C7.56861 7.56063 8.43736 7.56063 8.96517 7.32L13.5902 5.21063C14.1377 4.96063 14.1377 4.55125 13.5877 4.30156Z'
          stroke={stroke || "#060606"}
          strokeWidth={rest?.strokeWidth || "1.5"}
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M5.00017 9.64113L2.4158 10.8008C1.8658 11.0508 1.8658 11.4602 2.4158 11.7102L7.0408 13.8196C7.56861 14.0599 8.43736 14.0599 8.96517 13.8196L13.5902 11.7102C14.1402 11.4602 14.1402 11.0508 13.5902 10.8008L11.092 9.59863'
          stroke={stroke || "#060606"}
          strokeWidth={rest?.strokeWidth || "1.5"}
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M5 6.3897L2.4125 7.55095C1.8625 7.80095 1.8625 8.21032 2.4125 8.46032L7.0375 10.5694C7.56531 10.81 8.43406 10.81 8.96188 10.5694L13.5869 8.46032C14.14 8.21032 14.14 7.80095 13.59 7.55095L11 6.3897'
          stroke={stroke || "#060606"}
          strokeWidth={rest?.strokeWidth || "1.5"}
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </g>
    </svg>
  );
};

export default IconStack;
