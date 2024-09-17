import React from "react";
import { IconProps } from "./iconsInterface";

const IconBell: React.FC<IconProps> = ({
  width = 24,
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
      viewBox='0 0 24 24'
      fill={fill}
      {...rest}
    >
      <path
        d='M17.2496 12.0008V10.0008C17.2496 7.10129 14.8991 4.75079 11.9996 4.75079C9.10014 4.75079 6.74963 7.1013 6.74963 10.0008V12.0008L4.74963 16.2508H19.2496L17.2496 12.0008Z'
        stroke={"#060606"}
        strokeWidth={rest?.strokeWidth || "1.5"}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M9 16.7508C9 16.7508 9 19.2508 12 19.2508C15 19.2508 15 16.7508 15 16.7508'
        stroke={"#060606"}
        strokeWidth={rest?.strokeWidth || "1.5"}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default IconBell;
