import React from "react";
import { IconProps } from "./iconsInterface";

const IconHome: React.FC<IconProps> = ({
  width = 24,
  height = 24,
  fill = "none",
  stroke,
  ...rest
}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 24 24'
      fill={fill}
      {...rest}
    >
      <path
        d='M6.75073 19.2508H17.2507C18.3553 19.2508 19.2507 18.3554 19.2507 17.2508V9.7508L12.0007 4.75079L4.75073 9.7508V17.2508C4.75073 18.3554 5.64617 19.2508 6.75073 19.2508Z'
        stroke={stroke || "#060606"}
        strokeWidth={"1.5"}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M9.75 15.7484C9.75 14.6438 10.6455 13.7484 11.75 13.7484H12.25C13.3546 13.7484 14.25 14.6438 14.25 15.7484V19.2484H9.75V15.7484Z'
        stroke={stroke || "#060606"}
        strokeWidth={"1.5"}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default IconHome;
