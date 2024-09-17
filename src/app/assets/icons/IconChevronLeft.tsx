import React from 'react';
import { IconProps } from './iconsInterface';

const IconChevronLeft: React.FC<IconProps> = ({
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
        d="M13.25 8.75L9.75 12L13.25 15.25"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default IconChevronLeft;
