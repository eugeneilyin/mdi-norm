import { createThemedIcon } from './utils/createThemedIcon'
import { IconChatFilled } from './IconChatFilled'
import { IconChatOutlined } from './IconChatOutlined'
import { IconChatRounded } from './IconChatRounded'
import { IconChatSharp } from './IconChatSharp'
import { IconChatTwoTone } from './IconChatTwoTone'

export const IconChat = /*#__PURE__*/ props =>
  createThemedIcon(props, IconChatFilled, IconChatOutlined, IconChatRounded, IconChatSharp, IconChatTwoTone)
