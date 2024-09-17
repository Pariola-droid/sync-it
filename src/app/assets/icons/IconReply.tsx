import React from "react";
import { IconProps } from "./iconsInterface";

const IconReply: React.FC<IconProps> = ({
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
        d='M3.96094 9.16536L9.3776 3.95703V7.70703C16.0443 7.70703 16.0443 12.4987 16.0443 16.0404C14.1693 10.832 9.3776 10.6237 9.3776 10.6237V14.3737L3.96094 9.16536Z'
        stroke={stroke}
        strokeWidth='1.25'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default IconReply;
