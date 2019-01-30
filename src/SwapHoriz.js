import { createThemedIcon } from './utils/createThemedIcon'
import { FilledSwapHoriz } from './FilledSwapHoriz'
import { OutlineSwapHoriz } from './OutlineSwapHoriz'
import { RoundSwapHoriz } from './RoundSwapHoriz'
import { SharpSwapHoriz } from './SharpSwapHoriz'
import { TwoToneSwapHoriz } from './TwoToneSwapHoriz'

export const SwapHoriz = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledSwapHoriz, OutlineSwapHoriz, RoundSwapHoriz, SharpSwapHoriz, TwoToneSwapHoriz)
