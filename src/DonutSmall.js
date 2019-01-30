import { createThemedIcon } from './utils/createThemedIcon'
import { FilledDonutSmall } from './FilledDonutSmall'
import { OutlineDonutSmall } from './OutlineDonutSmall'
import { RoundDonutSmall } from './RoundDonutSmall'
import { SharpDonutSmall } from './SharpDonutSmall'
import { TwoToneDonutSmall } from './TwoToneDonutSmall'

export const DonutSmall = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledDonutSmall, OutlineDonutSmall, RoundDonutSmall, SharpDonutSmall, TwoToneDonutSmall)
