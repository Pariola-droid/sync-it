import React from "react";
import { IconProps } from "./iconsInterface";

const IconArchiveStack: React.FC<IconProps> = ({
  width = 20,
  height = 20,
  fill = "none",
  stroke,
  ...rest
}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={20}
      height={20}
      viewBox='0 0 20 20'
      fill={fill}
      {...rest}
    >
      <path
        d='M3.95898 8.95898H16.0423M5.62565 6.45898H14.3757M7.29232 3.95898H12.709M3.95898 11.459V14.3757C3.95898 15.2961 4.70518 16.0423 5.62565 16.0423H14.3757C15.2961 16.0423 16.0423 15.2961 16.0423 14.3757V11.459H12.2923V12.709H7.70898V11.459H3.95898Z'
        stroke={"#060606"}
        strokeWidth={"1.5"}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default IconArchiveStack;
