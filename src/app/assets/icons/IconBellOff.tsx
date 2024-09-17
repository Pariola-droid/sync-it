import React from "react";
import { IconProps } from "./iconsInterface";

const IconBellOff: React.FC<IconProps> = ({
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
        d='M14.3743 5.72884V9.99968L16.041 13.5413H6.45768M4.79102 11.7705L5.62435 9.99968V8.33301C5.62435 5.91676 7.5831 3.95801 9.99935 3.95801C9.99935 3.95801 11.3405 3.95802 12.1608 4.37466'
        stroke={stroke}
        strokeWidth={rest?.strokeWidth || 1.25}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M7.5 13.958C7.5 13.958 7.5 16.0413 10 16.0413C12.5 16.0413 12.5 13.958 12.5 13.958'
        stroke={stroke}
        strokeWidth={rest?.strokeWidth || 1.25}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M16.0423 3.95801L3.95898 16.0413'
        stroke={stroke}
        strokeWidth={rest?.strokeWidth || 1.25}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default IconBellOff;
