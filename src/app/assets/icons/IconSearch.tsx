import { IconProps } from "./iconsInterface";
import React from "react";

const IconSearch: React.FC<IconProps> = ({
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
      viewBox={`0 0 24 24`}
      fill={fill}
      {...rest}
    >
      <path
        d='M19.2496 19.2508L15.4996 15.5008M4.74963 11.0008C4.74963 7.54901 7.54785 4.75079 10.9996 4.75079C14.4514 4.75079 17.2496 7.54901 17.2496 11.0008C17.2496 14.4526 14.4514 17.2508 10.9996 17.2508C7.54785 17.2508 4.74963 14.4526 4.74963 11.0008Z'
        stroke={"#060606"}
        strokeWidth={rest?.strokeWidth || "1.5"}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default IconSearch;
