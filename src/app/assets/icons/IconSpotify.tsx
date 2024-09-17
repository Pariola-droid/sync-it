import React from 'react';
import { IconProps } from './iconsInterface';

const IconSpotify: React.FC<IconProps> = ({
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
        d="M19.0931 13.5003C18.2645 17.4177 14.4171 19.9217 10.4997 19.0931C6.58231 18.2645 4.07835 14.4171 4.90695 10.4997C5.73555 6.58231 9.58294 4.07835 13.5003 4.90695C17.4177 5.73555 19.9217 9.58294 19.0931 13.5003Z"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.3894 8.63709C9.3894 8.63709 10.5528 8.3721 12.6725 8.82047C14.7923 9.26884 15.7487 9.9822 15.7487 9.9822M9.74694 11.7791C9.74694 11.7791 10.7371 11.4775 12.0517 11.7555C13.3664 12.0336 14.1495 12.7103 14.1495 12.7103M10.3411 14.5729C10.6619 14.5751 11.0314 14.6061 11.4309 14.6906C11.8303 14.7751 12.1807 14.8964 12.4749 15.0243"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default IconSpotify;
