import React from 'react';
import { IconProps } from './iconsInterface';

const IconAsterisk: React.FC<IconProps> = ({
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
        d="M12 4.75V19.25"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.25 8.75L5.74994 15.2502"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.2498 15.2503L5.74976 8.75012"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default IconAsterisk;
