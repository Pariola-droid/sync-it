import React from "react";
import { IconProps } from "./iconsInterface";

const IconCopy: React.FC<IconProps> = ({
  width = 20,
  height = 20,
  fill = "none",
  stroke,
  ...rest
}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      {...rest}
    >
      <path
        d='M5.41659 12.7083C4.61117 12.7083 3.95825 12.0554 3.95825 11.25V5.62499C3.95825 4.70452 4.70444 3.95833 5.62492 3.95833H11.2499C12.0553 3.95833 12.7083 4.61125 12.7083 5.41666'
        stroke='white'
        strokeWidth='1.25'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M7.29175 8.95834C7.29175 8.03786 8.03794 7.29167 8.95841 7.29167H14.3751C15.2956 7.29167 16.0417 8.03786 16.0417 8.95834V14.375C16.0417 15.2955 15.2956 16.0417 14.3751 16.0417H8.95841C8.03794 16.0417 7.29175 15.2955 7.29175 14.375V8.95834Z'
        stroke='white'
        strokeWidth='1.25'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default IconCopy;
