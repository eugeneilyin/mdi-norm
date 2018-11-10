import * as React from 'react';
import { IconProps } from '../Icon';

export interface IconThemedProps extends IconProps {
  theme?: 'filled' | 'outlined' | 'rounded' | 'sharp' | 'two-tone';
}

declare const IconThemedProps: React.ComponentType<IconThemedProps>;

export default IconThemedProps;
