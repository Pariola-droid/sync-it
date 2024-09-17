import React from "react";
import { IconProps } from "./iconsInterface";

const IconUserPlus: React.FC<IconProps> = ({
  width = 18,
  height = 18,
  fill = "none",
  stroke = "#060606",
  ...rest
}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={18}
      height={18}
      viewBox='0 0 18 18'
      fill={fill}
      {...rest}
    >
      <path
        d='M12.7057 6.66536C12.7057 8.16114 11.4932 9.3737 9.9974 9.3737C8.50162 9.3737 7.28906 8.16114 7.28906 6.66536C7.28906 5.16959 8.50162 3.95703 9.9974 3.95703C11.4932 3.95703 12.7057 5.16959 12.7057 6.66536Z'
        stroke={stroke}
        strokeWidth={rest?.strokeWidth || "1.25"}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M10.2085 16.043H5.79145C4.80855 16.043 4.07508 15.1766 4.57588 14.3308C5.30223 13.1042 6.8663 11.668 10.2085 11.668'
        stroke={stroke}
        strokeWidth={rest?.strokeWidth || "1.25"}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M14.1641 12.293V16.043'
        stroke={stroke}
        strokeWidth={rest?.strokeWidth || "1.25"}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M16.0391 14.168L12.2891 14.168'
        stroke={stroke}
        strokeWidth={rest?.strokeWidth || "1.25"}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default IconUserPlus;
