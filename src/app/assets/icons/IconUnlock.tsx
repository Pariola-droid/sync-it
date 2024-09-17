import React from "react";
import { IconProps } from "./iconsInterface";

const IconUnlock: React.FC<IconProps> = ({
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
        stroke={stroke || "#D6D6D8"}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={rest?.strokeWidth || 1.25}
        d='M4.791 9.791c0-.46.373-.833.833-.833h8.75c.46 0 .834.373.834.833v4.584c0 .92-.747 1.666-1.667 1.666H6.458c-.92 0-1.667-.746-1.667-1.666V9.79ZM6.458 8.75v-.547c0-1.024-.041-2.12.562-2.948.478-.658 1.36-1.297 2.98-1.297 1.666 0 2.708 1.25 2.708 1.25'
      />
    </svg>
  );
};

export default IconUnlock;
