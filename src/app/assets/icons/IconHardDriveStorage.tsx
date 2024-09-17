import React from "react";
import { IconProps } from "./iconsInterface";

const IconHardDriveStorage: React.FC<IconProps> = ({
  width = 25,
  height = 24,
  fill = "none",
  stroke,
  ...rest
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 24 24`}
      fill={fill}
      xmlns='http://www.w3.org/2000/svg'
      {...rest}
    >
      <path
        d='M12 4.75C7.99594 4.75 4.75 7.99594 4.75 12C4.75 16.0041 7.99594 19.25 12 19.25C16.0041 19.25 19.25 16.0041 19.25 12C19.25 10.043 18.4746 8.26711 17.2143 6.96278M12 4.75C14.0471 4.75 15.896 5.59841 17.2143 6.96278M12 4.75V9.75M12 9.75C10.7574 9.75 9.75 10.7574 9.75 12C9.75 13.2426 10.7574 14.25 12 14.25C13.2426 14.25 14.25 13.2426 14.25 12C14.25 11.4237 14.0334 10.8981 13.6771 10.5M12 9.75C12.6664 9.75 13.2651 10.0397 13.6771 10.5M13.6771 10.5L17.2143 6.96278'
        stroke={stroke || "#060606"}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default IconHardDriveStorage;
