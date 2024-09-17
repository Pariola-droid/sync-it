import React from "react";
import { IconProps } from "./iconsInterface";

const IconClip: React.FC<IconProps> = ({
  width = 20,
  height = 20,
  fill = "none",
  stroke = "#060606",
  ...rest
}) => {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...rest}
    >
      <path
        d='M19.25 11.9513L13.1339 17.8603C11.216 19.7132 8.10639 19.7132 6.18845 17.8603C4.26348 16.0005 4.27158 12.9827 6.20651 11.1326L11.8508 5.70089C13.163 4.43304 15.2906 4.43304 16.6029 5.70087C17.92 6.97336 17.9144 9.03812 16.5905 10.304L10.8829 15.7859C10.1744 16.4704 9.02579 16.4703 8.31736 15.7859C7.6089 15.1014 7.60891 13.9917 8.31737 13.3072L13.0439 8.7408'
        stroke={stroke}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default IconClip;
