import React from "react";
import { IconProps } from "./iconsInterface";

const IconUser: React.FC<IconProps> = ({ fill = "none", stroke, ...rest }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={20}
      height={20}
      viewBox='0 0 20 20'
      fill='none'
      {...rest}
    >
      <path
        stroke={"#060606"}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={"1.25"}
        d='M12.7077 6.66732C12.7077 8.16309 11.4951 9.37565 9.99935 9.37565C8.50358 9.37565 7.29102 8.16309 7.29102 6.66732C7.29102 5.17155 8.50358 3.95898 9.99935 3.95898C11.4951 3.95898 12.7077 5.17155 12.7077 6.66732Z'
      />
      <path
        stroke={"#060606"}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={"1.25"}
        d='M5.70538 16.041H14.2929C15.2445 16.041 15.9775 15.2228 15.5331 14.3813C14.8794 13.1436 13.3891 11.666 9.99912 11.666C6.60913 11.666 5.11884 13.1436 4.46515 14.3813C4.02076 15.2228 4.75378 16.041 5.70538 16.041Z'
      />
    </svg>
  );
};

export default IconUser;
