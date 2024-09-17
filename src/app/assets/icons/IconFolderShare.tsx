import React from "react";
import { IconProps } from "./iconsInterface";

const IconFolderShare: React.FC<IconProps> = ({
  width,
  height,
  fill = "none",
  stroke,
  ...rest
}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox={`0 0 20 21`}
      fill={fill}
      {...rest}
    >
      <path
        d='M3.95801 6.95898H14.3747C15.2952 6.95898 16.0413 7.70518 16.0413 8.62565V14.8757C16.0413 15.7961 15.2951 16.5423 14.3747 16.5423H11.458M11.2497 6.95898L10.4734 5.32757C10.1814 4.79213 9.62017 4.45898 9.01026 4.45898H5.62467C4.7042 4.45898 3.95801 5.20518 3.95801 6.12565V9.04232M3.95801 16.5423L8.54134 11.959M8.54134 11.959H5.62467M8.54134 11.959V14.8757'
        stroke={stroke || "#060606"}
        strokeWidth='1.25'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default IconFolderShare;
