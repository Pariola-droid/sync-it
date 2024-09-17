import React from "react";
import { IconProps } from "./iconsInterface";

const IconMore: React.FC<IconProps> = ({
  fill = "none",
  color = "#060606",
  ...rest
}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={20}
      height={20}
      viewBox={`0 0 20 20`}
      fill={fill}
      {...rest}
    >
      <path
        d='M10.9993 10.1667C10.9993 10.811 10.477 11.3333 9.83268 11.3333C9.18833 11.3333 8.66602 10.811 8.66602 10.1667C8.66602 9.52232 9.18833 9 9.83268 9C10.477 9 10.9993 9.52232 10.9993 10.1667Z'
        fill={color}
      />
      <path
        d='M6.33333 10.1667C6.33333 10.811 5.81099 11.3333 5.16667 11.3333C4.52234 11.3333 4 10.811 4 10.1667C4 9.52232 4.52234 9 5.16667 9C5.81099 9 6.33333 9.52232 6.33333 10.1667Z'
        fill={color}
      />
      <path
        d='M15.6654 10.1667C15.6654 10.811 15.143 11.3333 14.4987 11.3333C13.8543 11.3333 13.332 10.811 13.332 10.1667C13.332 9.52232 13.8543 9 14.4987 9C15.143 9 15.6654 9.52232 15.6654 10.1667Z'
        fill={color}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default IconMore;
