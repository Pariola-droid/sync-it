import React from "react";
import { IconProps } from "./iconsInterface";

const IconAddComment: React.FC<IconProps> = ({
  width = 24,
  height = 24,
  fill = "none",
  stroke,
  ...rest
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...rest}
    >
      <path
        d='M11.9997 17.2087C14.9163 17.2087 18.0413 15.7503 18.0413 12.0003C18.0413 8.25033 14.9163 6.79199 11.9997 6.79199C9.08301 6.79199 5.95801 8.25033 5.95801 12.0003C5.95801 12.8585 6.12167 13.5967 6.40903 14.2248C6.58816 14.6163 6.68864 15.0481 6.60929 15.4713L6.3908 16.6366C6.28279 17.2126 6.7874 17.7172 7.36343 17.6092L10.0362 17.1081C10.2463 17.0687 10.4617 17.0721 10.6728 17.1056C11.1122 17.1753 11.5583 17.2087 11.9997 17.2087Z'
        stroke={stroke || "white"}
        strokeWidth='1.25'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M12 9.75V14.25'
        stroke={stroke || "white"}
        strokeWidth='0.833333'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M14.25 12H9.75'
        stroke={stroke || "white"}
        strokeWidth='0.833333'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default IconAddComment;
