import React from "react";
import { IconProps } from "./iconsInterface";

const IconAZSort: React.FC<IconProps> = ({
  width = 20,
  height = 20,
  fill = "none",
  stroke = "D6D6D8",
  ...rest
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...rest}
    >
      <path
        d='M3.95801 8.54232L4.63983 6.87565M4.63983 6.87565L5.83301 3.95898L7.02619 6.87565M4.63983 6.87565H7.02619M7.02619 6.87565L7.70801 8.54232M3.95801 12.2923H7.70801L3.95801 16.0423H7.70801M12.2913 6.04232L14.1663 3.95898M14.1663 3.95898L16.0413 6.04232M14.1663 3.95898V16.0423M14.1663 16.0423L12.2913 13.959M14.1663 16.0423L16.0413 13.959'
        stroke={stroke}
        strokeWidth='1.25'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default IconAZSort;
