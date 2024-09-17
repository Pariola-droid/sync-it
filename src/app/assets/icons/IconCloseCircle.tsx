import React from "react";
import { IconProps } from "./iconsInterface";

const IconCloseCircle: React.FC<IconProps> = ({
  width = 28,
  height = 28,
  fill = "none",
  stroke = "#060606",
  ...rest
}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill='none'
      {...rest}
    >
      <path
        d='M5.54102 14.0003C5.54102 9.32892 9.32794 5.54199 13.9993 5.54199C18.6708 5.54199 22.4577 9.32892 22.4577 14.0003C22.4577 18.6717 18.6708 22.4587 13.9993 22.4587C9.32794 22.4587 5.54102 18.6717 5.54102 14.0003Z'
        stroke={stroke}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M11.375 11.375L16.625 16.625'
        stroke={stroke}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M16.625 11.375L11.375 16.625'
        stroke={stroke}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default IconCloseCircle;
