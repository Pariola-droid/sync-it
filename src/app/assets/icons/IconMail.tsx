import React from "react";
import { IconProps } from "./iconsInterface";

const IconMail: React.FC<IconProps> = ({
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
        d='M3.95898 6.45964C3.95898 5.53916 4.70518 4.79297 5.62565 4.79297H14.3757C15.2961 4.79297 16.0423 5.53916 16.0423 6.45964V13.543C16.0423 14.4634 15.2961 15.2096 14.3757 15.2096H5.62565C4.70518 15.2096 3.95898 14.4634 3.95898 13.543V6.45964Z'
        stroke={stroke}
        strokeWidth={1.25}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M4.58398 5.41797L10.0007 10.2096L15.4173 5.41797'
        stroke={stroke}
        strokeWidth={1.25}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default IconMail;
