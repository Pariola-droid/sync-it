import React from "react";
import { IconProps } from "./iconsInterface";

const IconMessage: React.FC<IconProps> = ({
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
      <g opacity='0.4'>
        <path
          d='M11.9998 18.9758C16.1659 18.9758 19.5441 15.8793 19.5441 12.0602C19.5441 8.24107 16.1659 5.14453 11.9998 5.14453C7.83363 5.14453 4.45544 8.24107 4.45544 12.0602C4.45544 13.8239 5.17551 15.4325 6.36081 16.6538C6.72294 17.0286 6.98112 17.5256 6.85203 18.0294C6.71068 18.5803 6.44613 19.0919 6.07832 19.5257C6.37267 19.5786 6.67117 19.605 6.97023 19.6045C8.04488 19.6045 9.04073 19.2675 9.85803 18.6933C10.537 18.8778 11.2563 18.9758 11.9998 18.9758Z'
          stroke={stroke || "#060606"}
          strokeWidth={rest?.strokeWidth || "1.5"}
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </g>
    </svg>
  );
};

export default IconMessage;
