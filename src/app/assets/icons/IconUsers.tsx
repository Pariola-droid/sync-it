import React from "react";
import { IconProps } from "./iconsInterface";

const IconUsers: React.FC<IconProps> = ({
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
        d='M5.7803 19.2487H13.2169C13.7814 19.2487 14.2256 18.7804 14.1131 18.2272C13.8026 16.6999 12.7883 13.9987 9.49862 13.9987C6.20893 13.9987 5.19466 16.6999 4.8841 18.2272C4.77161 18.7804 5.2158 19.2487 5.7803 19.2487Z'
        stroke={stroke || "#060606"}
        strokeWidth={rest?.strokeWidth || "1.5"}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M15.75 13.9987C17.8288 13.9987 18.6802 16.1466 19.0239 17.6947C19.2095 18.5307 18.5333 19.2487 17.6769 19.2487H16.75'
        stroke={stroke || "#060606"}
        strokeWidth={rest?.strokeWidth || "1.5"}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M9.5 10.2513C11.0188 10.2513 12.25 9.02003 12.25 7.50125C12.25 5.98247 11.0188 4.75125 9.5 4.75125C7.98122 4.75125 6.75 5.98247 6.75 7.50125C6.75 9.02003 7.98122 10.2513 9.5 10.2513Z'
        stroke={stroke || "#060606"}
        strokeWidth={rest?.strokeWidth || "1.5"}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M14.7506 10.2513C16.2694 10.2513 17.2506 9.02003 17.2506 7.50125C17.2506 5.98247 16.2694 4.75125 14.7506 4.75125'
        stroke={stroke || "#060606"}
        strokeWidth={rest?.strokeWidth || "1.5"}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default IconUsers;
