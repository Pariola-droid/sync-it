import React from "react";
import { IconProps } from "./iconsInterface";

const IconDoubleChatBuble: React.FC<IconProps> = ({
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
      fill={fill}
      {...rest}
    >
      <path
        d='M9.99151 14.5101C12.7865 14.5101 15.233 12.9956 15.233 9.63003C15.233 6.26449 12.7865 4.75 9.99151 4.75C7.19653 4.75 4.75 6.26449 4.75 9.63003C4.75 10.8662 5.08005 11.8526 5.6362 12.606C5.83794 12.8793 5.79543 13.5163 5.63421 13.8153C5.24836 14.5309 5.97738 15.315 6.76977 15.1333C7.3629 14.9974 7.98504 14.8134 8.5295 14.5666C8.72883 14.4762 8.94893 14.4398 9.16641 14.4644C9.43657 14.4949 9.7123 14.5101 9.99151 14.5101Z'
        stroke={stroke}
        strokeWidth={rest?.strokeWidth || "1.5"}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M18.2285 10.5C18.8565 11.2712 19.2341 12.3078 19.2341 13.63C19.2341 14.8662 18.9041 15.8526 18.3479 16.606C18.1462 16.8793 18.1887 17.5163 18.3499 17.8153C18.7358 18.5309 18.0068 19.315 17.2144 19.1333C16.6212 18.9974 15.9991 18.8134 15.4546 18.5666C15.2553 18.4762 15.0352 18.4398 14.8177 18.4644C14.5476 18.4949 14.2718 18.5101 13.9926 18.5101C12.6969 18.5101 11.476 18.1846 10.5391 17.5'
        stroke={stroke}
        strokeWidth={rest?.strokeWidth || "1.5"}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default IconDoubleChatBuble;
