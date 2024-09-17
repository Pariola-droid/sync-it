import React from "react";
import { IconProps } from "./iconsInterface";

const IconTodoStatus: React.FC<IconProps> = ({
  width = 14,
  height = 14,
  fill = "none",
  stroke,
  ...rest
}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox={`0 0 14 14`}
      fill={fill}
      {...rest}
    >
      <path
        d='M12.25 7C12.25 4.10156 9.89844 1.75 7 1.75C4.10156 1.75 1.75 4.10156 1.75 7C1.75 9.89844 4.10156 12.25 7 12.25C9.89844 12.25 12.25 9.89844 12.25 7Z'
        stroke={stroke || "#060606"}
        strokeWidth={rest?.strokeWidth || "1.5"}
        strokeMiterlimit={rest?.strokeMiterlimit || "10"}
      />
    </svg>
  );
};

export default IconTodoStatus;
