import { IconProps } from "./iconsInterface";
import React from "react";

const IconChevronUp: React.FC<IconProps> = ({
  width = 21,
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
      viewBox={`0 0 12 20`}
      fill={fill}
      {...rest}
    >
      <path
        d='M12.709 11.0417L10.0007 8.125L7.29232 11.0417'
        stroke={stroke}
        strokeWidth={"1.5"}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default IconChevronUp;
