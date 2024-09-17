import React from "react";
import { IconProps } from "./iconsInterface";

const IconImage: React.FC<IconProps> = ({
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
          d='M3.16666 10.6665L4.99745 8.33763C5.51659 7.67725 6.50967 7.65564 7.05705 8.29282L8.66666 10.1665M7.27669 8.54849C7.96812 7.66894 8.93155 6.42287 8.99423 6.3418C8.99647 6.3389 8.9986 6.33615 9.00088 6.33328C9.52096 5.67716 10.5109 5.65704 11.057 6.29282L12.6667 8.1665M4.49999 12.8332H11.5C12.2364 12.8332 12.8333 12.2362 12.8333 11.4998V4.49984C12.8333 3.76346 12.2364 3.1665 11.5 3.1665H4.49999C3.76361 3.1665 3.16666 3.76346 3.16666 4.49984V11.4998C3.16666 12.2362 3.76361 12.8332 4.49999 12.8332Z'
          stroke='white'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </g>
    </svg>
  );
};

export default IconImage;
