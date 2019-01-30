import { createThemedIcon } from './utils/createThemedIcon'
import { FilledDonutLarge } from './FilledDonutLarge'
import { OutlineDonutLarge } from './OutlineDonutLarge'
import { RoundDonutLarge } from './RoundDonutLarge'
import { SharpDonutLarge } from './SharpDonutLarge'
import { TwoToneDonutLarge } from './TwoToneDonutLarge'

export const DonutLarge = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledDonutLarge, OutlineDonutLarge, RoundDonutLarge, SharpDonutLarge, TwoToneDonutLarge)
