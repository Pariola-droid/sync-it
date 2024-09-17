import React from "react";
import { IconProps } from "./iconsInterface";

const IconLocation: React.FC<IconProps> = ({
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
        strokeWidth={1.25}
        d='M15.101 9.167c0 3.333-4.979 6.875-4.979 6.875s-4.98-3.542-4.98-6.875c0-2.917 2.34-5.208 4.98-5.208 2.64 0 4.98 2.291 4.98 5.208Z'
      />
      <path
        stroke={stroke || "#D6D6D8"}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={rest?.strokeWidth || 1.25}
        d='M10.12 11.042c.99 0 1.793-.84 1.793-1.875 0-1.036-.802-1.875-1.792-1.875s-1.793.84-1.793 1.875c0 1.035.803 1.875 1.793 1.875Z'
      />
    </svg>
  );
};

export default IconLocation;
