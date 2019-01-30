import { createThemedIcon } from './utils/createThemedIcon'
import { FilledArrowUpward } from './FilledArrowUpward'
import { OutlineArrowUpward } from './OutlineArrowUpward'
import { RoundArrowUpward } from './RoundArrowUpward'
import { SharpArrowUpward } from './SharpArrowUpward'
import { TwoToneArrowUpward } from './TwoToneArrowUpward'

export const ArrowUpward = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledArrowUpward, OutlineArrowUpward, RoundArrowUpward, SharpArrowUpward, TwoToneArrowUpward)
