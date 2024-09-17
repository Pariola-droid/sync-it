import React from "react";
import { IconProps } from "./iconsInterface";

const IconCoins: React.FC<IconProps> = ({
  width = 20,
  height = 20,
  fill = "none",
  stroke = "#060606",
  ...rest
}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill='none'
      {...rest}
    >
      <path
        d='M7.29102 7.70801V5.41634M16.041 5.41634V8.74967C16.041 9.10999 15.649 9.43979 14.9993 9.69427M16.041 5.41634C16.041 6.22176 14.0823 6.87467 11.666 6.87467C9.24977 6.87467 7.29102 6.22176 7.29102 5.41634M16.041 5.41634C16.041 4.61093 14.0823 3.95801 11.666 3.95801C9.24977 3.95801 7.29102 4.61093 7.29102 5.41634'
        stroke={stroke}
        strokeWidth='1.25'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M12.709 11.2503V14.5837C12.709 15.3891 10.7502 16.042 8.33398 16.042C5.91774 16.042 3.95898 15.3891 3.95898 14.5837V11.2503M12.709 11.2503C12.709 12.0557 10.7502 12.7087 8.33398 12.7087C5.91774 12.7087 3.95898 12.0557 3.95898 11.2503M12.709 11.2503C12.709 10.4449 10.7502 9.79199 8.33398 9.79199C5.91774 9.79199 3.95898 10.4449 3.95898 11.2503'
        stroke={stroke}
        strokeWidth='1.25'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default IconCoins;
