import React from "react";
import { IconProps } from "./iconsInterface";

const IconInbox: React.FC<IconProps> = ({
  width = 20,
  height = 21,
  fill = "none",
  stroke = "#060606",
  ...rest
}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 20 21'
      fill='none'
      {...rest}
    >
      <path
        d='M16.0423 10.2913L14.721 5.66681C14.5166 4.9513 13.8626 4.45801 13.1185 4.45801H6.88282C6.13869 4.45801 5.48471 4.9513 5.28028 5.66681L3.95898 10.2913'
        stroke={"#060606"}
        strokeWidth={1.25}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M8.51248 10.8077C8.29741 10.5276 7.99621 10.292 7.64303 10.292H3.95898V14.8753C3.95898 15.7958 4.70518 16.542 5.62565 16.542H14.3757C15.2961 16.542 16.0423 15.7958 16.0423 14.8753V10.292H12.3583C12.0051 10.292 11.7039 10.5276 11.4888 10.8077C11.1461 11.2542 10.607 11.542 10.0007 11.542C9.39432 11.542 8.85521 11.2542 8.51248 10.8077Z'
        stroke={"#060606"}
        strokeWidth={1.25}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default IconInbox;
