import React from "react";
import { IconProps } from "./iconsInterface";

const IconArchive: React.FC<IconProps> = ({
  width = 20,
  height = 20,
  fill = "none",
  stroke,
  ...rest
}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={20}
      height={20}
      viewBox='0 0 20 20'
      fill={fill}
      {...rest}
    >
      <path
        d='M15.2077 7.29102H4.79102L5.48067 14.5324C5.56213 15.3878 6.28056 16.041 7.13983 16.041H12.8589C13.7181 16.041 14.4366 15.3878 14.518 14.5324L15.2077 7.29102Z'
        stroke={"#D6D6D8"}
        strokeWidth={"1.25"}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M16.0423 4.79232C16.0423 4.33208 15.6692 3.95898 15.209 3.95898H4.79232C4.33208 3.95898 3.95898 4.33208 3.95898 4.79232V6.45898C3.95898 6.91922 4.33208 7.29232 4.79232 7.29232H15.209C15.6692 7.29232 16.0423 6.91922 16.0423 6.45898V4.79232Z'
        stroke={"#D6D6D8"}
        strokeWidth={"1.25"}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M8.125 11.041H11.875'
        stroke={"#D6D6D8"}
        strokeWidth={"1.25"}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default IconArchive;
