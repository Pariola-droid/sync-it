import React from "react";
import { IconProps } from "./iconsInterface";

const IconPlay: React.FC<IconProps> = ({
  width = 20,
  height = 20,
  fill = "white",
}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 20 20'
      fill='none'
    >
      <path
        d='M4.375 4.71041C4.375 3.99708 5.13917 3.54541 5.76417 3.88875L15.3808 9.17791C15.528 9.25878 15.6508 9.3777 15.7363 9.52224C15.8218 9.66678 15.8669 9.83164 15.8669 9.99958C15.8669 10.1675 15.8218 10.3324 15.7363 10.4769C15.6508 10.6215 15.528 10.7404 15.3808 10.8212L5.76417 16.1104C5.6214 16.1889 5.46065 16.2288 5.29776 16.2263C5.13486 16.2237 4.97545 16.1787 4.83522 16.0958C4.695 16.0129 4.57881 15.8948 4.49811 15.7533C4.41741 15.6118 4.37498 15.4517 4.375 15.2887V4.71041Z'
        fill={fill}
      />
    </svg>
  );
};

export default IconPlay;
