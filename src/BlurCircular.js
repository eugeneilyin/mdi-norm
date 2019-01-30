import { createThemedIcon } from './utils/createThemedIcon'
import { FilledBlurCircular } from './FilledBlurCircular'
import { OutlineBlurCircular } from './OutlineBlurCircular'
import { RoundBlurCircular } from './RoundBlurCircular'
import { SharpBlurCircular } from './SharpBlurCircular'
import { TwoToneBlurCircular } from './TwoToneBlurCircular'

export const BlurCircular = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledBlurCircular, OutlineBlurCircular, RoundBlurCircular, SharpBlurCircular, TwoToneBlurCircular)
