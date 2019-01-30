import { createThemedIcon } from './utils/createThemedIcon'
import { FilledBorderOuter } from './FilledBorderOuter'
import { OutlineBorderOuter } from './OutlineBorderOuter'
import { RoundBorderOuter } from './RoundBorderOuter'
import { SharpBorderOuter } from './SharpBorderOuter'
import { TwoToneBorderOuter } from './TwoToneBorderOuter'

export const BorderOuter = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledBorderOuter, OutlineBorderOuter, RoundBorderOuter, SharpBorderOuter, TwoToneBorderOuter)
