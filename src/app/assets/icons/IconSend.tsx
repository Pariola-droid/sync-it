import React from "react";
import { IconProps } from "./iconsInterface";

const IconSend: React.FC<IconProps> = ({
  width = 24,
  height = 24,
  fill = "none",
  stroke = "#060606",
  ...rest
}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 24 24'
      fill='none'
      {...rest}
    >
      <path
        d='M3.74695 9.9718L19.1265 4.84527L14 20.2248L11.3483 12.6234L3.74695 9.9718Z'
        stroke={stroke}
        strokeWidth={rest?.strokeWidth || "1.5"}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M11.5242 12.4445L13.4688 10.5'
        stroke={stroke}
        strokeWidth={rest?.strokeWidth || "1.5"}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default IconSend;
