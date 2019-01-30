import { createThemedIcon } from './utils/createThemedIcon'
import { FilledKeyboardBackspace } from './FilledKeyboardBackspace'
import { OutlineKeyboardBackspace } from './OutlineKeyboardBackspace'
import { RoundKeyboardBackspace } from './RoundKeyboardBackspace'
import { SharpKeyboardBackspace } from './SharpKeyboardBackspace'
import { TwoToneKeyboardBackspace } from './TwoToneKeyboardBackspace'

export const KeyboardBackspace = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledKeyboardBackspace, OutlineKeyboardBackspace, RoundKeyboardBackspace, SharpKeyboardBackspace, TwoToneKeyboardBackspace)
