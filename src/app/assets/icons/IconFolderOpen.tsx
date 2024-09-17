import React from "react";
import { IconProps } from "./iconsInterface";

const IconFolderOpen: React.FC<IconProps> = ({
  width = 20,
  height = 21,
  fill = "none",
  stroke,
  ...rest
}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={20}
      height={21}
      viewBox={`0 0 20 21`}
      fill={fill}
      {...rest}
    >
      <path
        d='M16.0413 15.7077H7.5244C6.87431 15.7077 6.28355 15.3297 6.01113 14.7394L3.95801 10.291H13.5413L16.0413 15.7077ZM16.0413 15.7077V8.62435C16.0413 8.16411 15.6682 7.79102 15.208 7.79102H10.4457C10.167 7.79102 9.90684 7.65176 9.75229 7.41993L8.33301 5.29102H5.62467C5.16444 5.29102 4.79134 5.66411 4.79134 6.12435V8.20768'
        stroke={stroke || "#060606"}
        strokeWidth='1.25'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default IconFolderOpen;
