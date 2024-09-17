import React from "react";
import { IconProps } from "./iconsInterface";

const IconSidebarOpen: React.FC<IconProps> = ({
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
        d='M10.6667 4H14.4167C15.3371 4 16.0833 4.74619 16.0833 5.66667V14.4167C16.0833 15.3371 15.3371 16.0833 14.4167 16.0833H10.6667M4 14.4167V5.66667C4 4.74619 4.74619 4 5.66667 4H7.75V16.0833H5.66667C4.74619 16.0833 4 15.3371 4 14.4167Z'
        stroke={stroke}
        strokeWidth={"1.25"}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M3.95703 5.62565V14.3757C3.95703 15.2961 4.70322 16.0423 5.6237 16.0423H7.70703V3.95898H5.6237C4.70322 3.95898 3.95703 4.70518 3.95703 5.62565Z'
        fill={stroke}
        stroke={stroke}
        strokeWidth={"1.25"}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default IconSidebarOpen;
