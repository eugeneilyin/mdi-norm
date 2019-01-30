import { createThemedIcon } from './utils/createThemedIcon'
import { FilledArrowDropDownCircle } from './FilledArrowDropDownCircle'
import { OutlineArrowDropDownCircle } from './OutlineArrowDropDownCircle'
import { RoundArrowDropDownCircle } from './RoundArrowDropDownCircle'
import { SharpArrowDropDownCircle } from './SharpArrowDropDownCircle'
import { TwoToneArrowDropDownCircle } from './TwoToneArrowDropDownCircle'

export const ArrowDropDownCircle = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledArrowDropDownCircle, OutlineArrowDropDownCircle, RoundArrowDropDownCircle, SharpArrowDropDownCircle, TwoToneArrowDropDownCircle)
