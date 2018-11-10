import { createThemedIcon } from './utils/createThemedIcon'
import { IconKeyboardVoiceFilled } from './IconKeyboardVoiceFilled'
import { IconKeyboardVoiceOutlined } from './IconKeyboardVoiceOutlined'
import { IconKeyboardVoiceRounded } from './IconKeyboardVoiceRounded'
import { IconKeyboardVoiceSharp } from './IconKeyboardVoiceSharp'
import { IconKeyboardVoiceTwoTone } from './IconKeyboardVoiceTwoTone'

export const IconKeyboardVoice = /*#__PURE__*/ props =>
  createThemedIcon(props, IconKeyboardVoiceFilled, IconKeyboardVoiceOutlined, IconKeyboardVoiceRounded, IconKeyboardVoiceSharp, IconKeyboardVoiceTwoTone)
