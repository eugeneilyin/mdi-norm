import { createThemedIcon } from './utils/createThemedIcon'
import { FilledKeyboardArrowRight } from './FilledKeyboardArrowRight'
import { OutlineKeyboardArrowRight } from './OutlineKeyboardArrowRight'
import { RoundKeyboardArrowRight } from './RoundKeyboardArrowRight'
import { SharpKeyboardArrowRight } from './SharpKeyboardArrowRight'
import { TwoToneKeyboardArrowRight } from './TwoToneKeyboardArrowRight'

export const KeyboardArrowRight = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledKeyboardArrowRight, OutlineKeyboardArrowRight, RoundKeyboardArrowRight, SharpKeyboardArrowRight, TwoToneKeyboardArrowRight)
