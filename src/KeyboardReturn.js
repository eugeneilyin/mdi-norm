import { createThemedIcon } from './utils/createThemedIcon'
import { FilledKeyboardReturn } from './FilledKeyboardReturn'
import { OutlineKeyboardReturn } from './OutlineKeyboardReturn'
import { RoundKeyboardReturn } from './RoundKeyboardReturn'
import { SharpKeyboardReturn } from './SharpKeyboardReturn'
import { TwoToneKeyboardReturn } from './TwoToneKeyboardReturn'

export const KeyboardReturn = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledKeyboardReturn, OutlineKeyboardReturn, RoundKeyboardReturn, SharpKeyboardReturn, TwoToneKeyboardReturn)
