import React from "react";
import { IconProps } from "./iconsInterface";

const IconBox: React.FC<IconProps> = ({
  width = 20,
  height = 21,
  fill = "none",
  stroke,
  ...rest
}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 20 21'
      fill={fill}
      {...rest}
    >
      <path
        d='M4.20032 7.2998L10.0003 4.6998L15.8003 7.2998L10.0003 9.8998L4.20032 7.2998Z'
        stroke={"#060606"}
        strokeWidth={"1.2"}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M4.20032 13.6998L10.0003 16.2998L15.8003 13.6998'
        stroke={"#060606"}
        strokeWidth={"1.2"}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M15.7996 7.30017V13.7002'
        stroke={"#060606"}
        strokeWidth={"1.2"}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M4.20032 7.30017V13.7002'
        stroke={"#060606"}
        strokeWidth={"1.2"}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M9.99988 10.1V16.1'
        stroke={"#060606"}
        strokeWidth={"1.2"}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default IconBox;
