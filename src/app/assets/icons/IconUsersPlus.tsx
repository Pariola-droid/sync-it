import React from "react";
import { IconProps } from "./iconsInterface";

const IconUsersPlus: React.FC<IconProps> = ({
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
      viewBox='0 0 20 20'
      fill={fill}
      {...rest}
    >
      <path
        d='M14.1667 12.2923V16.0423M9.37501 16.0423H4.81808C4.34766 16.0423 3.97751 15.6521 4.07125 15.1911C4.33004 13.9183 5.17527 11.6673 7.91667 11.6673C8.47873 11.6673 8.96108 11.7142 9.37501 11.8757M16.0417 14.1673H12.2917M12.2917 8.54232C13.5573 8.54232 14.375 7.5163 14.375 6.25065C14.375 4.985 13.5573 3.95898 12.2917 3.95898M10.2083 6.25065C10.2083 7.5163 9.18233 8.54232 7.91667 8.54232C6.65102 8.54232 5.62501 7.5163 5.62501 6.25065C5.62501 4.985 6.65102 3.95898 7.91667 3.95898C9.18233 3.95898 10.2083 4.985 10.2083 6.25065Z'
        stroke={stroke}
        strokeWidth='1.25'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default IconUsersPlus;
