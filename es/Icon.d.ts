import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  component?: React.ComponentType<IconProps>;
  fill?: string;
  shade?: 'on-light' | 'on-dark';
  state?: 'focused' | 'active' | 'inactive' | 'error';
  size?: number;
  title?: string;
}

declare const IconProps: React.ComponentType<IconProps>;

export default IconProps;
