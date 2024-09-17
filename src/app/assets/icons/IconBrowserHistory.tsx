import React from "react";
import { IconProps } from "./iconsInterface";

const IconBrowserHistory: React.FC<IconProps> = ({
  width = 20,
  height = 21,
  fill = "none",
  stroke = "#060606",
  ...rest
}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 20 21'
      fill='none'
      {...rest}
    >
      <path
        d='M3.95898 7.37533V14.042C3.95898 14.9625 4.70518 15.7087 5.62565 15.7087H11.0423M3.95898 7.37533V6.95866C3.95898 6.03818 4.70518 5.29199 5.62565 5.29199H14.3757C15.2961 5.29199 16.0423 6.03818 16.0423 6.95866V7.37533H3.95898ZM13.959 15.292L15.0007 16.542L16.0423 15.292M13.959 11.542L15.0007 10.292L16.0423 11.542'
        stroke={stroke}
        strokeWidth={rest?.strokeWidth || "1.25"}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default IconBrowserHistory;
