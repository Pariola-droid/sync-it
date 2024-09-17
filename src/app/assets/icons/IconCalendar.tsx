import React from "react";
import { IconProps } from "./iconsInterface";

const IconCalendar: React.FC<IconProps> = ({
  width = 25,
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
      viewBox={`0 0 25 24`}
      fill={fill}
      {...rest}
    >
      <path
        d='M5.25 8.75C5.25 7.64543 6.14543 6.75 7.25 6.75H17.75C18.8546 6.75 19.75 7.64543 19.75 8.75V17.25C19.75 18.3546 18.8546 19.25 17.75 19.25H7.25C6.14543 19.25 5.25 18.3546 5.25 17.25V8.75Z'
        stroke={stroke || "#060606"}
        strokeWidth={rest?.strokeWidth || "1.5"}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M8.5 4.75V8.25'
        stroke={stroke || "#060606"}
        strokeWidth={rest?.strokeWidth || "1.5"}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M16.5 4.75V8.25'
        stroke={stroke || "#060606"}
        strokeWidth={rest?.strokeWidth || "1.5"}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M8.25 10.75H16.75'
        stroke={stroke || "#060606"}
        strokeWidth={rest?.strokeWidth || "1.5"}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default IconCalendar;
