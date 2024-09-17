import React from "react";
import { IconProps } from "./iconsInterface";

const IconAlert: React.FC<IconProps> = ({
  width = 20,
  height = 20,
  fill = "none",
  stroke = "#060606",
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
        d='M10 12.5005H10.0083'
        stroke={stroke}
        strokeWidth='1.25'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M4.51011 8.6701L8.6701 4.51012C9.40494 3.77527 10.5964 3.77527 11.3312 4.51011L15.4912 8.6701C16.226 9.40494 16.226 10.5964 15.4912 11.3312L11.3312 15.4912C10.5964 16.226 9.40495 16.226 8.6701 15.4912L4.51012 11.3312C3.77527 10.5964 3.77527 9.40495 4.51011 8.6701Z'
        stroke={stroke}
        strokeWidth='1.25'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M10 7.29199V10.2087'
        stroke={stroke}
        strokeWidth='1.25'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default IconAlert;
