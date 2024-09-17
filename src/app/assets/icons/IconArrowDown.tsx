import React from 'react';
import { IconProps } from './iconsInterface';

const IconArrowDown: React.FC<IconProps> = ({
  width = 24,
  height = 24,
  fill = 'none',
  stroke = '#060606',
  ...rest
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      {...rest}
    >
      <path
        d="M17.25 13.75L12 19.25L6.75 13.75"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 18.25V4.75"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default IconArrowDown;
