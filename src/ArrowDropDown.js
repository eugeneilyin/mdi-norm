import { createThemedIcon } from './utils/createThemedIcon'
import { FilledArrowDropDown } from './FilledArrowDropDown'
import { OutlineArrowDropDown } from './OutlineArrowDropDown'
import { RoundArrowDropDown } from './RoundArrowDropDown'
import { SharpArrowDropDown } from './SharpArrowDropDown'
import { TwoToneArrowDropDown } from './TwoToneArrowDropDown'

export const ArrowDropDown = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledArrowDropDown, OutlineArrowDropDown, RoundArrowDropDown, SharpArrowDropDown, TwoToneArrowDropDown)
