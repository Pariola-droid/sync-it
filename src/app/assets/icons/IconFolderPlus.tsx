import React from "react";
import { IconProps } from "./iconsInterface";

const IconFolderPlus: React.FC<IconProps> = ({
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
        d='M12.25 19.25H6.75C5.64543 19.25 4.75 18.3546 4.75 17.25V7.75H17.25C18.3546 7.75 19.25 8.64543 19.25 9.75V12.25'
        stroke={stroke || "#060606"}
        strokeWidth={rest?.strokeWidth || "1.5"}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M13.5 7.5L12.5685 5.7923C12.2181 5.14977 11.5446 4.75 10.8127 4.75H6.75C5.64543 4.75 4.75 5.64543 4.75 6.75V11'
        stroke={stroke || "#060606"}
        strokeWidth={rest?.strokeWidth || "1.5"}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M17 14.75V19.25'
        stroke={stroke || "#060606"}
        strokeWidth={rest?.strokeWidth || "1.5"}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M19.25 17L14.75 17'
        stroke={stroke || "#060606"}
        strokeWidth={rest?.strokeWidth || "1.5"}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default IconFolderPlus;
