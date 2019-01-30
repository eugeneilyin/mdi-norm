import { createThemedIcon } from './utils/createThemedIcon'
import { FilledKeyboardArrowUp } from './FilledKeyboardArrowUp'
import { OutlineKeyboardArrowUp } from './OutlineKeyboardArrowUp'
import { RoundKeyboardArrowUp } from './RoundKeyboardArrowUp'
import { SharpKeyboardArrowUp } from './SharpKeyboardArrowUp'
import { TwoToneKeyboardArrowUp } from './TwoToneKeyboardArrowUp'

export const KeyboardArrowUp = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledKeyboardArrowUp, OutlineKeyboardArrowUp, RoundKeyboardArrowUp, SharpKeyboardArrowUp, TwoToneKeyboardArrowUp)
