import React from "react";
import { IconProps } from "./iconsInterface";

const IconServer: React.FC<IconProps> = ({
  width = 24,
  height = 24,
  fill = "none",
  stroke,
  ...rest
}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 24 24'
      fill={fill}
      {...rest}
    >
      <path
        d='M4.74963 5.75078C4.74963 5.1985 5.19735 4.75078 5.74963 4.75078H18.2496C18.8019 4.75078 19.2496 5.1985 19.2496 5.75078V9.25078C19.2496 9.80306 18.8019 10.2508 18.2496 10.2508H5.74963C5.19734 10.2508 4.74963 9.80306 4.74963 9.25078V5.75078Z'
        stroke={stroke || "#060606"}
        strokeWidth={rest?.strokeWidth || "1.5"}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M4.74963 14.7508C4.74963 14.1985 5.19735 13.7508 5.74963 13.7508H18.2496C18.8019 13.7508 19.2496 14.1985 19.2496 14.7508V18.2508C19.2496 18.8031 18.8019 19.2508 18.2496 19.2508H5.74963C5.19734 19.2508 4.74963 18.8031 4.74963 18.2508V14.7508Z'
        stroke={stroke || "#060606"}
        strokeWidth={rest?.strokeWidth || "1.5"}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M16.2504 4.99922V9.99922'
        stroke={stroke || "#060606"}
        strokeWidth={rest?.strokeWidth || "1.5"}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M16.2504 13.9992V18.9992'
        stroke={stroke || "#060606"}
        strokeWidth={rest?.strokeWidth || "1.5"}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default IconServer;
