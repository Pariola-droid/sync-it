import React from "react";
import { IconProps } from "./iconsInterface";

const IconCalendarTimer: React.FC<IconProps> = ({
  width = 18,
  height = 18,
  fill = "none",
  stroke = "#060606",
  ...rest
}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 18 18'
      fill={fill}
      {...rest}
    >
      <path
        d='M14.4375 6.9375V6.5625C14.4375 5.73407 13.7659 5.0625 12.9375 5.0625H5.0625C4.23407 5.0625 3.5625 5.73407 3.5625 6.5625V12.9375C3.5625 13.7659 4.23407 14.4375 5.0625 14.4375H6.9375M11.25 10.3125V11.25L12.1875 12.1875M6 3.5625V6.1875M12 3.5625V6.1875M11.25 14.4375C9.48959 14.4375 8.0625 13.0104 8.0625 11.25C8.0625 9.48959 9.48959 8.0625 11.25 8.0625C13.0104 8.0625 14.4375 9.48959 14.4375 11.25C14.4375 13.0104 13.0104 14.4375 11.25 14.4375Z'
        stroke={stroke}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default IconCalendarTimer;
