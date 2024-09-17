import React from "react";
import { IconProps } from "./iconsInterface";

const IconFileText: React.FC<IconProps> = ({
  width = 25,
  height = 24,
  fill = "none",
  stroke,
  ...rest
}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox={`0 0 25 24`}
      fill={fill}
      {...rest}
    >
      <path
        d='M8.25 19.25H16.75C17.8546 19.25 18.75 18.3546 18.75 17.25V9L14.5 4.75H8.25C7.14543 4.75 6.25 5.64543 6.25 6.75V17.25C6.25 18.3546 7.14543 19.25 8.25 19.25Z'
        stroke={stroke || "#060606"}
        strokeWidth={rest?.strokeWidth || "1.5"}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M18.5 9.25H14.25V5'
        stroke={stroke || "#060606"}
        strokeWidth={rest?.strokeWidth || "1.5"}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M10.25 15.25H14.75'
        stroke={stroke || "#060606"}
        strokeWidth={rest?.strokeWidth || "1.5"}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M10.25 12.25H14.75'
        stroke={stroke || "#060606"}
        strokeWidth={rest?.strokeWidth || "1.5"}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default IconFileText;
