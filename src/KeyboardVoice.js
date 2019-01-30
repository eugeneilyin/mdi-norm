import { createThemedIcon } from './utils/createThemedIcon'
import { FilledKeyboardVoice } from './FilledKeyboardVoice'
import { OutlineKeyboardVoice } from './OutlineKeyboardVoice'
import { RoundKeyboardVoice } from './RoundKeyboardVoice'
import { SharpKeyboardVoice } from './SharpKeyboardVoice'
import { TwoToneKeyboardVoice } from './TwoToneKeyboardVoice'

export const KeyboardVoice = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledKeyboardVoice, OutlineKeyboardVoice, RoundKeyboardVoice, SharpKeyboardVoice, TwoToneKeyboardVoice)
