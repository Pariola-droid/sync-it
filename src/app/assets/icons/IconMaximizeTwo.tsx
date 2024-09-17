import React from "react";
import { IconProps } from "./iconsInterface";

const IconMaximizeTwo: React.FC<IconProps> = ({
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
        d='M3.96094 12.2891V16.0391H7.71094'
        stroke={rest?.stroke || "#060606"}
        strokeWidth={rest?.strokeWidth || "1.5"}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M16.0391 7.71094V3.96094H12.2891'
        stroke={rest?.stroke || "#060606"}
        strokeWidth={rest?.strokeWidth || "1.5"}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M4.16406 15.8359L8.53906 11.4609'
        stroke={rest?.stroke || "#060606"}
        strokeWidth={rest?.strokeWidth || "1.5"}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M15.8359 4.16406L11.4609 8.53906'
        stroke={rest?.stroke || "#060606"}
        strokeWidth={rest?.strokeWidth || "1.5"}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default IconMaximizeTwo;
