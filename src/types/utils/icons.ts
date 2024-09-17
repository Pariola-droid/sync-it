import { SVGProps } from 'react';

export interface IconProps extends SVGProps<SVGSVGElement> {
  width?: number | string;
  height?: number | string;
  fill?: string;
  stroke?: string;
}
