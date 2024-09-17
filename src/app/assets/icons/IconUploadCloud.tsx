import React from "react";
import { IconProps } from "./iconsInterface";

const IconUploadCloud: React.FC<IconProps> = ({
  width = 24,
  height = 24,
  fill = "none",
  stroke = "#060606",
  ...rest
}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill={fill}
      {...rest}
    >
      <path
        d='M6.25 14.25C6.25 14.25 4.75 14 4.75 12C4.75 10.2869 6.07542 8.88339 7.75672 8.75897C7.88168 6.5239 9.73368 4.75 12 4.75C14.2663 4.75 16.1183 6.5239 16.2433 8.75897C17.9246 8.88339 19.25 10.2869 19.25 12C19.25 14 17.75 14.25 17.75 14.25'
        stroke={stroke}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M14.25 15.25L12 12.75L9.75 15.25'
        stroke={stroke}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M12 19.25V13.75'
        stroke={stroke}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default IconUploadCloud;