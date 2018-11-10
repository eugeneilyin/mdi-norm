import { createThemedIcon } from './utils/createThemedIcon'
import { IconVoiceChatFilled } from './IconVoiceChatFilled'
import { IconVoiceChatOutlined } from './IconVoiceChatOutlined'
import { IconVoiceChatRounded } from './IconVoiceChatRounded'
import { IconVoiceChatSharp } from './IconVoiceChatSharp'
import { IconVoiceChatTwoTone } from './IconVoiceChatTwoTone'

export const IconVoiceChat = /*#__PURE__*/ props =>
  createThemedIcon(props, IconVoiceChatFilled, IconVoiceChatOutlined, IconVoiceChatRounded, IconVoiceChatSharp, IconVoiceChatTwoTone)
