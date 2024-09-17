import React from "react";
import { IconProps } from "./iconsInterface";

const IconFile2: React.FC<IconProps> = ({
  width = 24,
  height = 25,
  fill = "none",
  stroke = "white",
  ...rest
}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 24 25'
      fill='none'
      {...rest}
    >
      <path
        d='M12.75 5.25H7.75C6.64543 5.25 5.75 6.14543 5.75 7.25V17.75C5.75 18.8546 6.64543 19.75 7.75 19.75H16.25C17.3546 19.75 18.25 18.8546 18.25 17.75V10.75M12.75 5.25V8.75C12.75 9.85457 13.6454 10.75 14.75 10.75H18.25M12.75 5.25L18.25 10.75'
        stroke={stroke}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default IconFile2;
