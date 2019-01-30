import { createThemedIcon } from './utils/createThemedIcon'
import { FilledBlurLinear } from './FilledBlurLinear'
import { OutlineBlurLinear } from './OutlineBlurLinear'
import { RoundBlurLinear } from './RoundBlurLinear'
import { SharpBlurLinear } from './SharpBlurLinear'
import { TwoToneBlurLinear } from './TwoToneBlurLinear'

export const BlurLinear = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledBlurLinear, OutlineBlurLinear, RoundBlurLinear, SharpBlurLinear, TwoToneBlurLinear)
