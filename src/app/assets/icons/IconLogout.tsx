import React from "react";
import { IconProps } from "./iconsInterface";

const IconLogout: React.FC<IconProps> = () => {
  return (
    <svg
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M13.125 7.29102L16.0417 9.99935L13.125 12.7077'
        stroke={"#060606"}
        strokeWidth={"1.25"}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M15.834 10H8.95898'
        stroke={"#060606"}
        strokeWidth={"1.25"}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M12.709 3.95898H5.62565C4.70518 3.95898 3.95898 4.70518 3.95898 5.62565V14.3757C3.95898 15.2961 4.70518 16.0423 5.62565 16.0423H12.709'
        stroke={"#060606"}
        strokeWidth={"1.25"}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default IconLogout;
