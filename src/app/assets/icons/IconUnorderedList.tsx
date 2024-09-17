import React from "react";
import { IconProps } from "./iconsInterface";

const IconUnorderedList: React.FC<IconProps> = ({
  width = 20,
  height = 20,
  fill = "none",
  stroke,
  ...rest
}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={20 || width}
      height={20 || height}
      viewBox={`0 0 20 20`}
      fill={fill}
      {...rest}
    >
      <path
        d='M5.41634 5.00065C5.41634 5.23077 5.22979 5.41732 4.99967 5.41732C4.76956 5.41732 4.58301 5.23077 4.58301 5.00065C4.58301 4.77053 4.76956 4.58398 4.99967 4.58398C5.22979 4.58398 5.41634 4.77053 5.41634 5.00065Z'
        stroke={stroke || "#D6D6D8"}
        strokeWidth='0.833333'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M5.41634 10.0007C5.41634 10.2308 5.22979 10.4173 4.99967 10.4173C4.76956 10.4173 4.58301 10.2308 4.58301 10.0007C4.58301 9.77053 4.76956 9.58398 4.99967 9.58398C5.22979 9.58398 5.41634 9.77053 5.41634 10.0007Z'
        stroke={stroke || "#D6D6D8"}
        strokeWidth='0.833333'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M5.41634 15.0007C5.41634 15.2308 5.22979 15.4173 4.99967 15.4173C4.76956 15.4173 4.58301 15.2308 4.58301 15.0007C4.58301 14.7705 4.76956 14.584 4.99967 14.584C5.22979 14.584 5.41634 14.7705 5.41634 15.0007Z'
        stroke={stroke || "#D6D6D8"}
        strokeWidth='0.833333'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M8.125 5H15.2083'
        stroke={stroke || "#D6D6D8"}
        strokeWidth='1.25'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M8.125 10H15.2083'
        stroke={stroke || "#D6D6D8"}
        strokeWidth='1.25'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M8.125 15H15.2083'
        stroke={stroke || "#D6D6D8"}
        strokeWidth='1.25'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default IconUnorderedList;
