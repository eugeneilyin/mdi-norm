import { createThemedIcon } from './utils/createThemedIcon'
import { FilledSwapHorizontalCircle } from './FilledSwapHorizontalCircle'
import { OutlineSwapHorizontalCircle } from './OutlineSwapHorizontalCircle'
import { RoundSwapHorizontalCircle } from './RoundSwapHorizontalCircle'
import { SharpSwapHorizontalCircle } from './SharpSwapHorizontalCircle'
import { TwoToneSwapHorizontalCircle } from './TwoToneSwapHorizontalCircle'

export const SwapHorizontalCircle = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledSwapHorizontalCircle, OutlineSwapHorizontalCircle, RoundSwapHorizontalCircle, SharpSwapHorizontalCircle, TwoToneSwapHorizontalCircle)
