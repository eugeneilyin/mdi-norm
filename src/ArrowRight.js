import { createThemedIcon } from './utils/createThemedIcon'
import { FilledArrowRight } from './FilledArrowRight'
import { OutlineArrowRight } from './OutlineArrowRight'
import { RoundArrowRight } from './RoundArrowRight'
import { SharpArrowRight } from './SharpArrowRight'
import { TwoToneArrowRight } from './TwoToneArrowRight'

export const ArrowRight = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledArrowRight, OutlineArrowRight, RoundArrowRight, SharpArrowRight, TwoToneArrowRight)
