import React from "react";
import { IconProps } from "./iconsInterface";

const IconSidePane: React.FC<IconProps> = ({
  width = 20,
  height = 20,
  fill = "none",
  stroke,
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
        stroke={stroke || "#060606"}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={rest.strokeWidth || 1.25}
        d='M10.667 4h3.75c.92 0 1.666.746 1.666 1.667v8.75c0 .92-.746 1.666-1.666 1.666h-3.75M4 14.417v-8.75C4 4.747 4.746 4 5.667 4H7.75v12.083H5.667c-.92 0-1.667-.746-1.667-1.666Z'
      />
      <path
        fill={fill}
        stroke={stroke || "#060606"}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={rest.strokeWidth || 1.25}
        d='M3.958 5.626v8.75c0 .92.746 1.666 1.667 1.666h2.083V3.96H5.625c-.92 0-1.667.746-1.667 1.667Z'
      />
    </svg>
  );
};

export default IconSidePane;
