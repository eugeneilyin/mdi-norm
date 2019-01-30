import { createThemedIcon } from './utils/createThemedIcon'
import { FilledKeyboard } from './FilledKeyboard'
import { OutlineKeyboard } from './OutlineKeyboard'
import { RoundKeyboard } from './RoundKeyboard'
import { SharpKeyboard } from './SharpKeyboard'
import { TwoToneKeyboard } from './TwoToneKeyboard'

export const Keyboard = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledKeyboard, OutlineKeyboard, RoundKeyboard, SharpKeyboard, TwoToneKeyboard)
