import { createThemedIcon } from './utils/createThemedIcon'
import { FilledKeyboardArrowLeft } from './FilledKeyboardArrowLeft'
import { OutlineKeyboardArrowLeft } from './OutlineKeyboardArrowLeft'
import { RoundKeyboardArrowLeft } from './RoundKeyboardArrowLeft'
import { SharpKeyboardArrowLeft } from './SharpKeyboardArrowLeft'
import { TwoToneKeyboardArrowLeft } from './TwoToneKeyboardArrowLeft'

export const KeyboardArrowLeft = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledKeyboardArrowLeft, OutlineKeyboardArrowLeft, RoundKeyboardArrowLeft, SharpKeyboardArrowLeft, TwoToneKeyboardArrowLeft)
