import React from "react";
import { IconProps } from "./iconsInterface";

const IconFolder: React.FC<IconProps> = ({
  width = 25,
  height = 24,
  fill = "none",
  stroke,
  ...rest
}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={25}
      height={24}
      viewBox={`0 0 25 24`}
      fill={fill}
      {...rest}
    >
      <path
        d='M19.75 17.25V9.75C19.75 8.64543 18.8546 7.75 17.75 7.75H5.25V17.25C5.25 18.3546 6.14543 19.25 7.25 19.25H17.75C18.8546 19.25 19.75 18.3546 19.75 17.25Z'
        stroke={stroke || "#060606"}
        strokeWidth={rest?.strokeWidth || "1.5"}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M14 7.5L13.0685 5.7923C12.7181 5.14977 12.0446 4.75 11.3127 4.75H7.25C6.14543 4.75 5.25 5.64543 5.25 6.75V11'
        stroke={stroke || "#060606"}
        strokeWidth={rest?.strokeWidth || "1.5"}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default IconFolder;
