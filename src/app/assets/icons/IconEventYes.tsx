import React from "react";
import { IconProps } from "./iconsInterface";

const IconEventYes: React.FC<IconProps> = ({
  width = 20,
  height = 20,
  fill = "none",
  stroke,
  ...rest
}) => {
  return (
    <svg
      width={"20"}
      height={"20"}
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M5.5 8.34699L6.53598 9.76591C6.86068 10.2106 7.52716 10.202 7.84024 9.74899L10.5 5.90039'
        stroke='#01DE4F'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <rect x='0.5' y='0.5' width='15' height='15' rx='7.5' stroke='#01DE4F' />
    </svg>
  );
};

export default IconEventYes;
