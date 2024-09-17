import React from "react";
import type { IconProps } from "./iconsInterface";

const IconExpand: React.FC<IconProps> = ({
  width = 24,
  height = 24,
  fill = "none",
  stroke,
  ...rest
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...rest}
    >
      <path
        d='M5.8125 18.1875V14.8125M5.8125 18.1875H9.1875M5.8125 18.1875L9.75 14.25M18.1875 5.8125H14.8125M18.1875 5.8125V9.1875M18.1875 5.8125L14.25 9.75'
        stroke={stroke || "white"}
        strokeWidth='1.125'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default IconExpand;
