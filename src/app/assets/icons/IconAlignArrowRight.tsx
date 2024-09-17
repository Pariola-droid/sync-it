import React from 'react';
import { IconProps } from './iconsInterface';

const IconAlignArrowRight: React.FC<IconProps> = ({
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
        d="M4.75 4.75V19.25"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.75 12H19.25"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.75 8.75L19.25 12L15.75 15.25"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default IconAlignArrowRight;
