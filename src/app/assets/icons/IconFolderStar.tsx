import React from "react";
import { IconProps } from "./iconsInterface";

const IconFolderStar: React.FC<IconProps> = ({
  width = 20,
  height = 21,
  fill = "none",
  stroke,
  ...rest
}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={20 || width}
      height={21 || height}
      viewBox={`0 0 20 21`}
      fill={fill}
      {...rest}
    >
      <path
        d='M10.208 16.5423H5.62467C4.7042 16.5423 3.95801 15.7962 3.95801 14.8757V6.95898H14.3747C15.2952 6.95898 16.0413 7.70518 16.0413 8.62565V9.04232M11.2497 6.95898L10.4734 5.32757C10.1814 4.79213 9.62017 4.45898 9.01026 4.45898H5.62467C4.7042 4.45898 3.95801 5.20518 3.95801 6.12565V9.66732M14.1663 11.1257C14.1663 12.1673 13.333 13.834 12.2913 13.834C13.333 13.834 14.1663 15.5007 14.1663 16.5423C14.1663 15.5007 14.9997 13.834 16.0413 13.834C14.9997 13.834 14.1663 12.1673 14.1663 11.1257Z'
        stroke={stroke || "#060606"}
        strokeWidth='1.25'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default IconFolderStar;
