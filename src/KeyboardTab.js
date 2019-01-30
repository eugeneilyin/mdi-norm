import { createThemedIcon } from './utils/createThemedIcon'
import { FilledKeyboardTab } from './FilledKeyboardTab'
import { OutlineKeyboardTab } from './OutlineKeyboardTab'
import { RoundKeyboardTab } from './RoundKeyboardTab'
import { SharpKeyboardTab } from './SharpKeyboardTab'
import { TwoToneKeyboardTab } from './TwoToneKeyboardTab'

export const KeyboardTab = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledKeyboardTab, OutlineKeyboardTab, RoundKeyboardTab, SharpKeyboardTab, TwoToneKeyboardTab)
