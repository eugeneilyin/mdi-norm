import { createThemedIcon } from './utils/createThemedIcon'
import { FilledAdjust } from './FilledAdjust'
import { OutlineAdjust } from './OutlineAdjust'
import { RoundAdjust } from './RoundAdjust'
import { SharpAdjust } from './SharpAdjust'
import { TwoToneAdjust } from './TwoToneAdjust'

export const Adjust = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledAdjust, OutlineAdjust, RoundAdjust, SharpAdjust, TwoToneAdjust)
