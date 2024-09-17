import React from "react";
import { IconProps } from "./iconsInterface";

<svg
  width='20'
  height='20'
  viewBox='0 0 20 20'
  fill='none'
  xmlns='http://www.w3.org/2000/svg'
>
  <path
    d='M10.6257 3.95703H14.3757C15.2961 3.95703 16.0423 4.70322 16.0423 5.6237V14.3737C16.0423 15.2942 15.2961 16.0404 14.3757 16.0404H10.6257M3.95898 14.3737V5.6237C3.95898 4.70322 4.70518 3.95703 5.62565 3.95703H7.70898V16.0404H5.62565C4.70518 16.0404 3.95898 15.2942 3.95898 14.3737Z'
    stroke='#060606'
    strokeWidth='1.25'
    strokeLinecap='round'
    strokeLinejoin='round'
  />
</svg>;

const IconSidebar: React.FC<IconProps> = ({
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
        d='M10.6257 3.95703H14.3757C15.2961 3.95703 16.0423 4.70322 16.0423 5.6237V14.3737C16.0423 15.2942 15.2961 16.0404 14.3757 16.0404H10.6257M3.95898 14.3737V5.6237C3.95898 4.70322 4.70518 3.95703 5.62565 3.95703H7.70898V16.0404H5.62565C4.70518 16.0404 3.95898 15.2942 3.95898 14.3737Z'
        stroke={stroke}
        strokeWidth={rest?.strokeWidth || "1.25"}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default IconSidebar;
