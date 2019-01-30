import { createThemedIcon } from './utils/createThemedIcon'
import { FilledArrowForward } from './FilledArrowForward'
import { OutlineArrowForward } from './OutlineArrowForward'
import { RoundArrowForward } from './RoundArrowForward'
import { SharpArrowForward } from './SharpArrowForward'
import { TwoToneArrowForward } from './TwoToneArrowForward'

export const ArrowForward = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledArrowForward, OutlineArrowForward, RoundArrowForward, SharpArrowForward, TwoToneArrowForward)
