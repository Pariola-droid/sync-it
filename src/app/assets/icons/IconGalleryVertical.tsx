import React from "react";
import { IconProps } from "./iconsInterface";

const IconGalleryVertical: React.FC<IconProps> = ({
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
        d='M7.29427 3.95703H12.7109M5.6276 6.45703H14.3776M4.79427 16.0404H15.2109C15.6712 16.0404 16.0443 15.6673 16.0443 15.207V9.79036C16.0443 9.33013 15.6712 8.95703 15.2109 8.95703H4.79427C4.33403 8.95703 3.96094 9.33013 3.96094 9.79036V15.207C3.96094 15.6673 4.33403 16.0404 4.79427 16.0404Z'
        stroke={stroke}
        strokeWidth={rest?.strokeWidth || "1.5"}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default IconGalleryVertical;
