import React from "react";
import { IconProps } from "./iconsInterface";

const IconEmojiFace: React.FC<IconProps> = ({
  width = 20,
  height = 20,
  fill = "none",
  stroke,
  ...rest
}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='16'
      height='16'
      viewBox='0 0 16 16'
      fill='none'
      {...rest}
    >
      <g opacity='0.7'>
        <path
          d='M5.83332 3.1665H10.1667C11.6394 3.1665 12.8333 4.36041 12.8333 5.83317V10.1665C12.8333 11.6393 11.6394 12.8332 10.1667 12.8332H5.83332C4.36056 12.8332 3.16666 11.6393 3.16666 10.1665V5.83317C3.16666 4.36041 4.36056 3.1665 5.83332 3.1665Z'
          stroke='#D6D6D8'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M5.16666 8.5C5.16666 8.5 5.99999 10.1667 7.99999 10.1667C9.99999 10.1667 10.8333 8.5 10.8333 8.5'
          stroke='#D6D6D8'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M7.00001 6.66683C7.00001 6.85092 6.85077 7.00016 6.66668 7.00016C6.48258 7.00016 6.33334 6.85092 6.33334 6.66683C6.33334 6.48273 6.48258 6.3335 6.66668 6.3335C6.85077 6.3335 7.00001 6.48273 7.00001 6.66683Z'
          stroke='#D6D6D8'
          strokeWidth='0.666667'
        />
        <path
          d='M9.66667 6.66683C9.66667 6.85092 9.51743 7.00016 9.33333 7.00016C9.14924 7.00016 9 6.85092 9 6.66683C9 6.48273 9.14924 6.3335 9.33333 6.3335C9.51743 6.3335 9.66667 6.48273 9.66667 6.66683Z'
          stroke='#D6D6D8'
          strokeWidth='0.666667'
        />
      </g>
    </svg>
  );
};

export default IconEmojiFace;
