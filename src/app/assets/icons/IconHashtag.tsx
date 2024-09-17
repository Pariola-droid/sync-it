import React from "react";
import { IconProps } from "./iconsInterface";

const IconHashtag: React.FC<IconProps> = ({
  width = 24,
  height = 25,
  fill = "none",
  ...rest
}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox={`0 0 24 25`}
      fill={fill}
      {...rest}
    >
      <path
        d='M10.7411 6L8.58594 18.5'
        stroke={"#060606"}
        strokeWidth={"1.29"}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M15.913 6L13.7578 18.5'
        stroke={"#060606"}
        strokeWidth={"1.29"}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M18.4993 9.44922H6.86133'
        stroke={"#060606"}
        strokeWidth={"1.29"}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M17.6379 15.0508H6'
        stroke={"#060606"}
        strokeWidth={"1.29"}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default IconHashtag;
