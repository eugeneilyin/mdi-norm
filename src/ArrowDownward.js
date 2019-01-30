import { createThemedIcon } from './utils/createThemedIcon'
import { FilledArrowDownward } from './FilledArrowDownward'
import { OutlineArrowDownward } from './OutlineArrowDownward'
import { RoundArrowDownward } from './RoundArrowDownward'
import { SharpArrowDownward } from './SharpArrowDownward'
import { TwoToneArrowDownward } from './TwoToneArrowDownward'

export const ArrowDownward = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledArrowDownward, OutlineArrowDownward, RoundArrowDownward, SharpArrowDownward, TwoToneArrowDownward)
