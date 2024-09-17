import React from "react";
import { IconProps } from "./iconsInterface";

const IconEventMaybe: React.FC<IconProps> = ({
  width = 20,
  height = 20,
  fill = "none",
  stroke,
  ...rest
}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={"20"}
      height={"20"}
      viewBox='0 0 20 20'
      fill='none'
    >
      <path
        d='M3.81294 9.99983H16.1873'
        stroke='#CFD307'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default IconEventMaybe;
