import React from 'react';
import { IconProps } from './iconsInterface';

const IconArrowRight: React.FC<IconProps> = ({
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
      viewBox={`0 0 24 24`}
      fill="none"
      {...rest}
    >
      <path
        d="M13.75 6.75L19.25 12L13.75 17.25"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19 12H4.75"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default IconArrowRight;
