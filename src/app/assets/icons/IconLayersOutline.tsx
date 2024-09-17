import * as React from "react";
import { IconProps } from "./iconsInterface";

const IconLayersOutline: React.FC<IconProps> = props => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={16}
    viewBox='0 0 16 16'
    fill='none'
    {...props}
  >
    <path
      stroke='#060606'
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M13.588 4.302 8.921 2.173c-.506-.23-1.334-.23-1.84 0L2.416 4.302c-.55.25-.55.659 0 .909L7.041 7.32c.528.24 1.397.24 1.925 0l4.625-2.11c.547-.25.547-.659-.003-.908ZM5 9.641l-2.584 1.16c-.55.25-.55.66 0 .91l4.625 2.109c.528.24 1.397.24 1.925 0l4.625-2.11c.55-.25.55-.66 0-.91L11.093 9.6'
    />
    <path
      stroke='#060606'
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M5 6.39 2.413 7.55c-.55.25-.55.66 0 .91l4.625 2.11c.527.24 1.396.24 1.924 0l4.625-2.11c.553-.25.553-.66.003-.91L11 6.39'
    />
  </svg>
);

export default IconLayersOutline;
