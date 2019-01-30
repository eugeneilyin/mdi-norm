import { createThemedIcon } from './utils/createThemedIcon'
import { FilledArrowRightAlt } from './FilledArrowRightAlt'
import { OutlineArrowRightAlt } from './OutlineArrowRightAlt'
import { RoundArrowRightAlt } from './RoundArrowRightAlt'
import { SharpArrowRightAlt } from './SharpArrowRightAlt'
import { TwoToneArrowRightAlt } from './TwoToneArrowRightAlt'

export const ArrowRightAlt = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledArrowRightAlt, OutlineArrowRightAlt, RoundArrowRightAlt, SharpArrowRightAlt, TwoToneArrowRightAlt)
