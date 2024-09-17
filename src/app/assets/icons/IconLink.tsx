import React from "react";
import { IconProps } from "./iconsInterface";

const IconLink: React.FC<IconProps> = ({
  width = 20,
  height = 20,
  fill = "none",
  stroke = "#060606",
  ...rest
}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      {...rest}
    >
      <path
        d='M13.9583 11.0417L14.9999 10C16.3806 8.61928 16.3806 6.38071 14.9999 5C13.6192 3.61928 11.3806 3.61928 9.99992 5L8.95825 6.04166'
        stroke={stroke}
        strokeWidth='1.25'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M6.04156 8.95833L4.99989 10C3.61918 11.3807 3.61918 13.6193 4.99989 15C6.3806 16.3807 8.61918 16.3807 9.99989 15L11.0416 13.9583'
        stroke={stroke}
        strokeWidth='1.25'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M11.875 8.125L8.125 11.875'
        stroke={stroke}
        strokeWidth='1.25'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default IconLink;
