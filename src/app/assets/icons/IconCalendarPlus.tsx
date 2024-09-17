import React from "react";
import { IconProps } from "./iconsInterface";

const IconCalendarPlus: React.FC<IconProps> = ({
  width = 20,
  height = 20,
  fill = "none",
  stroke = "#060606",
  ...rest
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 20 20`}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...rest}
    >
      <path
        d='M16.0423 9.37467V7.29134C16.0423 6.37087 15.2961 5.62467 14.3757 5.62467H5.62565C4.70518 5.62467 3.95898 6.37087 3.95898 7.29134V14.3747C3.95898 15.2951 4.70518 16.0413 5.62565 16.0413H9.37565M14.1673 12.2913V16.0413M16.0423 14.1663H12.2923M6.66732 3.95801V6.87467M13.334 3.95801V6.87467M6.45898 8.95801H13.5423'
        stroke={stroke}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default IconCalendarPlus;
