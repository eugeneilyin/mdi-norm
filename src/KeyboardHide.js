import { createThemedIcon } from './utils/createThemedIcon'
import { FilledKeyboardHide } from './FilledKeyboardHide'
import { OutlineKeyboardHide } from './OutlineKeyboardHide'
import { RoundKeyboardHide } from './RoundKeyboardHide'
import { SharpKeyboardHide } from './SharpKeyboardHide'
import { TwoToneKeyboardHide } from './TwoToneKeyboardHide'

export const KeyboardHide = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledKeyboardHide, OutlineKeyboardHide, RoundKeyboardHide, SharpKeyboardHide, TwoToneKeyboardHide)
