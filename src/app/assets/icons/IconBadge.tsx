import React from "react";
import { IconProps } from "./iconsInterface";

const IconBadge: React.FC<IconProps> = ({ stroke = "#D6D6D8" }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={20}
      height={20}
      viewBox='0 0 20 20'
      fill={"none"}
    >
      <path
        d='M11.8743 7.29036L15.2077 3.95703H4.79102L8.12435 7.29036'
        stroke={stroke}
        strokeWidth={"1.52"}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M14.375 11.668C14.375 14.0842 12.4162 16.043 10 16.043C7.58375 16.043 5.625 14.0842 5.625 11.668C5.625 9.25172 7.58375 7.29297 10 7.29297C12.4162 7.29297 14.375 9.25172 14.375 11.668Z'
        stroke={stroke}
        strokeWidth={"1.25"}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default IconBadge;
