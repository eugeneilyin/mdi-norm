import { createThemedIcon } from './utils/createThemedIcon'
import { FilledSwapVert } from './FilledSwapVert'
import { OutlineSwapVert } from './OutlineSwapVert'
import { RoundSwapVert } from './RoundSwapVert'
import { SharpSwapVert } from './SharpSwapVert'
import { TwoToneSwapVert } from './TwoToneSwapVert'

export const SwapVert = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledSwapVert, OutlineSwapVert, RoundSwapVert, SharpSwapVert, TwoToneSwapVert)
