import React from "react";
import { IconProps } from "./iconsInterface";

const IconPinTack2: React.FC<IconProps> = ({
  width = 20,
  height = 20,
  fill = "none",
  stroke = "#060606",
  ...rest
}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 20 20'
      fill={fill}
      {...rest}
    >
      <path
        d='M13.1224 4.79036L15.2057 6.8737M13.1224 4.79036L6.66406 8.33203M13.1224 4.79036L12.2891 3.95703M15.2057 6.8737L11.6641 13.332M15.2057 6.8737L16.0391 7.70703'
        stroke={stroke}
        strokeWidth={rest?.strokeWidth || "1.25"}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M5.625 7.29297L12.7083 14.3763'
        stroke={stroke}
        strokeWidth={rest?.strokeWidth || "1.25"}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M9.16927 10.832L3.96094 16.0404'
        stroke={stroke}
        strokeWidth={rest?.strokeWidth || "1.25"}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default IconPinTack2;
