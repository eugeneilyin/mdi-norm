import { createThemedIcon } from './utils/createThemedIcon'
import { FilledKeyboardCapslock } from './FilledKeyboardCapslock'
import { OutlineKeyboardCapslock } from './OutlineKeyboardCapslock'
import { RoundKeyboardCapslock } from './RoundKeyboardCapslock'
import { SharpKeyboardCapslock } from './SharpKeyboardCapslock'
import { TwoToneKeyboardCapslock } from './TwoToneKeyboardCapslock'

export const KeyboardCapslock = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledKeyboardCapslock, OutlineKeyboardCapslock, RoundKeyboardCapslock, SharpKeyboardCapslock, TwoToneKeyboardCapslock)
