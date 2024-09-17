import React from "react";
import { IconProps } from "./iconsInterface";

const IconLock: React.FC<IconProps> = ({
  width = 24,
  height = 25,
  fill = "none",
  stroke,
  ...rest
}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='25'
      viewBox='0 0 24 25'
      fill='none'
      {...rest}
    >
      <path
        d='M6 12.2755C6 11.7803 6.40141 11.3789 6.89657 11.3789H16.3106C16.8057 11.3789 17.2071 11.7803 17.2071 12.2755V17.2066C17.2071 18.1969 16.4043 18.9997 15.414 18.9997H7.79314C6.80282 18.9997 6 18.1969 6 17.2066V12.2755Z'
        stroke='#060606'
        strokeWidth='1.44447'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M7.79283 11.1553V11.0142C7.79283 9.6145 7.70862 8.05426 8.68623 7.05248C9.24374 6.48119 10.1459 6 11.6033 6C13.0606 6 13.9628 6.48119 14.5203 7.05249C15.4979 8.05426 15.4137 9.6145 15.4137 11.0142V11.1553'
        stroke='#060606'
        strokeWidth='1.44447'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default IconLock;
