import React from "react";
import { IconProps } from "./iconsInterface";

const IconTrash2: React.FC<IconProps> = ({
  width = 20,
  height = 20,
  fill = "none",
  stroke,
  ...rest
}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox={`0 0 20 20`}
      fill={fill}
      {...rest}
    >
      <path
        d='M4.79102 6.45898L5.49198 14.52C5.56687 15.3813 6.28786 16.0423 7.15238 16.0423H12.013C12.8775 16.0423 13.5985 15.3813 13.6734 14.52L14.3743 6.45898H4.79102Z'
        stroke='#FF1E1E'
        strokeWidth={"1.25"}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M8.125 8.95898V13.5423'
        stroke='#FF1E1E'
        strokeWidth={"1.25"}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M11.041 8.95898V13.5423'
        stroke='#FF1E1E'
        strokeWidth={"1.25"}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M7.29102 6.45898V5.62565C7.29102 4.70518 8.03721 3.95898 8.95768 3.95898H10.2077C11.1282 3.95898 11.8743 4.70518 11.8743 5.62565V6.45898'
        stroke='#FF1E1E'
        strokeWidth={"1.25"}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M3.95898 6.45898H15.209'
        stroke='#FF1E1E'
        strokeWidth={"1.25"}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default IconTrash2;
