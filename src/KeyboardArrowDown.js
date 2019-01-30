import { createThemedIcon } from './utils/createThemedIcon'
import { FilledKeyboardArrowDown } from './FilledKeyboardArrowDown'
import { OutlineKeyboardArrowDown } from './OutlineKeyboardArrowDown'
import { RoundKeyboardArrowDown } from './RoundKeyboardArrowDown'
import { SharpKeyboardArrowDown } from './SharpKeyboardArrowDown'
import { TwoToneKeyboardArrowDown } from './TwoToneKeyboardArrowDown'

export const KeyboardArrowDown = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledKeyboardArrowDown, OutlineKeyboardArrowDown, RoundKeyboardArrowDown, SharpKeyboardArrowDown, TwoToneKeyboardArrowDown)
