import React from "react";
import { IconProps } from "./iconsInterface";

const IconEmojiPlus: React.FC<IconProps> = ({
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
      viewBox='0 0 24 24'
      fill='none'
      {...rest}
    >
      <path
        d='M9.75 14.75C9.75 14.75 10.5 15.75 12 15.75C13.5 15.75 14.25 14.75 14.25 14.75M19.25 11.75V12C19.25 13.4339 18.8248 14.8356 18.0282 16.0279C17.2315 17.2201 16.0992 18.1494 14.7745 18.6981C13.4497 19.2469 11.992 19.3904 10.5856 19.1107C9.17924 18.831 7.88741 18.1405 6.87348 17.1265C5.85955 16.1126 5.16905 14.8208 4.88931 13.4144C4.60957 12.008 4.75314 10.5503 5.30188 9.22554C5.85061 7.90078 6.77986 6.76849 7.97212 5.97185C9.16438 5.1752 10.5661 4.75 12 4.75H12.25M19.25 7L14.75 7M17 9.25V4.75M10 11V11.01M14 11V11.01'
        stroke={stroke}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default IconEmojiPlus;
