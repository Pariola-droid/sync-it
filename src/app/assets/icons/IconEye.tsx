import React from "react";
import type { IconProps } from "./iconsInterface";

const IconEye: React.FC<IconProps> = ({
  fill = "none",
  stroke = "#060606",
  ...rest
}) => {
  return (
    <svg
      width={20}
      height={21}
      viewBox='0 0 20 21'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...rest}
    >
      <path
        d='M15.5212 8.83317C15.8878 9.582 16.0423 10.2286 16.0423 10.4998C16.0423 11.3332 14.584 15.7082 10.0007 15.7082C9.39115 15.7082 8.8369 15.6308 8.33398 15.4947M5.83398 14.057C4.46906 12.7243 3.95898 10.9927 3.95898 10.4998C3.95898 9.6665 5.41732 5.2915 10.0007 5.2915C11.4962 5.2915 12.6591 5.75735 13.5472 6.41399'
        stroke={stroke}
        strokeWidth='1.25'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M16.0423 4.4585L3.95898 16.5418'
        stroke={stroke}
        strokeWidth='1.25'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M8.67417 11.8259C7.94194 11.0936 7.94194 9.90644 8.67417 9.17419C9.40642 8.44194 10.5936 8.44194 11.3258 9.17419'
        stroke={stroke}
        strokeWidth='1.25'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default IconEye;
