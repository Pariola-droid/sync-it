import React from "react";
import { IconProps } from "./iconsInterface";

const IconSettingsSliders: React.FC<IconProps> = ({
  width = 20,
  height = 20,
  fill = "none",
  stroke,
  ...rest
}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox={`0 0 20 20`}
      fill={fill}
      {...rest}
    >
      <path
        d='M3.95898 6.66406H6.04232'
        stroke={stroke || "#060606"}
        strokeWidth={rest?.strokeWidth || "1.25"}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M10.625 6.66406H16.0417'
        stroke={stroke || "#060606"}
        strokeWidth={rest?.strokeWidth || "1.25"}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M3.95898 13.3359H10.209'
        stroke={stroke || "#060606"}
        strokeWidth={rest?.strokeWidth || "1.25"}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M14.791 13.3359H16.041'
        stroke={stroke || "#D6D6D8"}
        strokeWidth={rest?.strokeWidth || "1.25"}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M10.209 6.66406C10.209 7.6996 9.36952 8.53906 8.33398 8.53906C7.29845 8.53906 6.45898 7.6996 6.45898 6.66406C6.45898 5.62853 7.29845 4.78906 8.33398 4.78906C9.36952 4.78906 10.209 5.62853 10.209 6.66406Z'
        stroke={stroke || "#D6D6D8"}
        strokeWidth={rest?.strokeWidth || "1.25"}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M14.375 13.3359C14.375 14.3715 13.5355 15.2109 12.5 15.2109C11.4645 15.2109 10.625 14.3715 10.625 13.3359C10.625 12.3004 11.4645 11.4609 12.5 11.4609C13.5355 11.4609 14.375 12.3004 14.375 13.3359Z'
        stroke={stroke || "#D6D6D8"}
        strokeWidth={rest?.strokeWidth || "1.25"}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default IconSettingsSliders;
