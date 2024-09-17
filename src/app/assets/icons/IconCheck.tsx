import React from "react";
import { IconProps } from "./iconsInterface";

const IconCheck: React.FC<IconProps> = ({
  width = 20,
  height = 20,
  fill = "none",
  stroke,
  ...rest
}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={height}
      height={width}
      viewBox='0 0 20 20'
      fill='none'
      {...rest}
    >
      <path
        d='M4.79199 10.7221L6.95028 13.6782C7.62675 14.6047 9.01524 14.5867 9.66749 13.6429L15.2087 5.625'
        stroke={stroke || "white"}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default IconCheck;
