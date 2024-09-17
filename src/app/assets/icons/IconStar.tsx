import React from "react";
import { IconProps } from "./iconsInterface";

const IconStar: React.FC<IconProps> = ({
  fill = "none",
  stroke = "#060606",
  ...rest
}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={20}
      height={20}
      viewBox={`0 0 20 20`}
      fill={"none"}
    >
      <path
        d='M9.99967 3.95801L11.458 8.54134H16.0413L12.2913 11.458L13.5413 16.0413L9.99967 13.1247L6.45801 16.0413L7.70801 11.458L3.95801 8.54134H8.54134L9.99967 3.95801Z'
        stroke={stroke}
        strokeWidth={rest?.strokeWidth || "1.25"}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default IconStar;
