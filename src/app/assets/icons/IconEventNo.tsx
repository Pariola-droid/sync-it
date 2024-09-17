import React from "react";
import { IconProps } from "./iconsInterface";

const IconEventNo: React.FC<IconProps> = ({
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
      <rect x='0.5' y='0.5' width='15' height='15' rx='7.5' stroke='#E41010' />
      <path
        d='M11.4998 8H4.37476'
        stroke='#E41010'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default IconEventNo;
