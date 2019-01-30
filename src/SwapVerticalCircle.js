import { createThemedIcon } from './utils/createThemedIcon'
import { FilledSwapVerticalCircle } from './FilledSwapVerticalCircle'
import { OutlineSwapVerticalCircle } from './OutlineSwapVerticalCircle'
import { RoundSwapVerticalCircle } from './RoundSwapVerticalCircle'
import { SharpSwapVerticalCircle } from './SharpSwapVerticalCircle'
import { TwoToneSwapVerticalCircle } from './TwoToneSwapVerticalCircle'

export const SwapVerticalCircle = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledSwapVerticalCircle, OutlineSwapVerticalCircle, RoundSwapVerticalCircle, SharpSwapVerticalCircle, TwoToneSwapVerticalCircle)
