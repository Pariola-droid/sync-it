import React from 'react';
import { IconProps } from './iconsInterface';

const IconArrowLeft: React.FC<IconProps> = ({
  width = 25,
  height = 24,
  stroke = '#060606',
  ...rest
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      {...rest}
    >
      <path
        d="M10.25 6.75L4.75 12L10.25 17.25"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.25 12H5"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default IconArrowLeft;
