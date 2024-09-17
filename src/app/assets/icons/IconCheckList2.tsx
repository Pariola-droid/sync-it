import React from "react";
import { IconProps } from "./iconsInterface";

const IconCheckList2: React.FC<IconProps> = ({
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
      viewBox={`0 0 ${width} ${height}`}
      fill='none'
      {...rest}
    >
      <path
        d='M16.0423 10.208V5.62467C16.0423 4.7042 15.2961 3.95801 14.3757 3.95801H5.62565C4.70518 3.95801 3.95898 4.7042 3.95898 5.62467V14.3747C3.95898 15.2951 4.70518 16.0413 5.62565 16.0413H9.37565M7.29232 7.29134H12.709M7.29232 10.6247H12.709M12.2923 14.7913L13.5423 16.0413C14.1673 14.1663 16.0423 13.1247 16.0423 13.1247'
        stroke={stroke}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default IconCheckList2;
