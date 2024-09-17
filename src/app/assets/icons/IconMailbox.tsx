import React from 'react';
import { IconProps } from './iconsInterface';

const IconMailbox: React.FC<IconProps> = ({
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
        d="M11.2499 15.25V8C11.2499 6.20507 9.7948 4.75 7.99988 4.75C6.20495 4.75 4.74988 6.20507 4.74988 8V15.25C4.74988 15.8023 5.19759 16.25 5.74988 16.25H10.2499C10.8022 16.25 11.2499 15.8023 11.2499 15.25Z"
        stroke={stroke}
        stroke-opacity="0.8"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.5 9C8.5 9.27614 8.27614 9.5 8 9.5C7.72386 9.5 7.5 9.27614 7.5 9C7.5 8.72386 7.72386 8.5 8 8.5C8.27614 8.5 8.5 8.72386 8.5 9Z"
        stroke={stroke}
        stroke-opacity="0.8"
      />
      <path
        d="M8.75 4.75H15.25C17.4591 4.75 19.25 6.54086 19.25 8.75V15.25C19.25 15.8023 18.8023 16.25 18.25 16.25H8.75"
        stroke={stroke}
        stroke-opacity="0.8"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.75 9H16.25"
        stroke={stroke}
        stroke-opacity="0.8"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.25 16.5V19.25"
        stroke={stroke}
        stroke-opacity="0.8"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default IconMailbox;
