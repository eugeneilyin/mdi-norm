import { createThemedIcon } from './utils/createThemedIcon'
import { FilledSwapCalls } from './FilledSwapCalls'
import { OutlineSwapCalls } from './OutlineSwapCalls'
import { RoundSwapCalls } from './RoundSwapCalls'
import { SharpSwapCalls } from './SharpSwapCalls'
import { TwoToneSwapCalls } from './TwoToneSwapCalls'

export const SwapCalls = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledSwapCalls, OutlineSwapCalls, RoundSwapCalls, SharpSwapCalls, TwoToneSwapCalls)
