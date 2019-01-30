import { createThemedIcon } from './utils/createThemedIcon'
import { FilledAspectRatio } from './FilledAspectRatio'
import { OutlineAspectRatio } from './OutlineAspectRatio'
import { RoundAspectRatio } from './RoundAspectRatio'
import { SharpAspectRatio } from './SharpAspectRatio'
import { TwoToneAspectRatio } from './TwoToneAspectRatio'

export const AspectRatio = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledAspectRatio, OutlineAspectRatio, RoundAspectRatio, SharpAspectRatio, TwoToneAspectRatio)
