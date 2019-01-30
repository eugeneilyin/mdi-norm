import * as React from 'react';
import { IconProps } from '../Icon';

export interface IconThemedProps extends IconProps {
  theme?: 'filled' | 'outline' | 'round' | 'sharp' | 'two-tone';
}

declare const IconThemedProps: React.ComponentType<IconThemedProps>;

export default IconThemedProps;
