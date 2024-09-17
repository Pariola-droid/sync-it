import React from "react";
import { IconProps } from "./iconsInterface";

const IconInformation: React.FC<IconProps> = ({
  width = 20,
  height = 20,
  fill = "none",
  stroke = "#060606",
}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox={`0 0 20 20`}
      fill={"none"}
    >
      <path
        d='M10 10.8359V12.5026'
        stroke={stroke}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M10.4173 7.5026C10.4173 7.73272 10.2308 7.91927 10.0007 7.91927C9.77053 7.91927 9.58398 7.73272 9.58398 7.5026C9.58398 7.27249 9.77053 7.08594 10.0007 7.08594C10.2308 7.08594 10.4173 7.27249 10.4173 7.5026Z'
        stroke={stroke}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M16.0423 10.0026C16.0423 13.3393 13.3374 16.0443 10.0007 16.0443C6.66393 16.0443 3.95898 13.3393 3.95898 10.0026C3.95898 6.66588 6.66393 3.96094 10.0007 3.96094C13.3374 3.96094 16.0423 6.66588 16.0423 10.0026Z'
        stroke={stroke}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default IconInformation;
