import { createThemedIcon } from './utils/createThemedIcon'
import { IconChatBubbleFilled } from './IconChatBubbleFilled'
import { IconChatBubbleOutlined } from './IconChatBubbleOutlined'
import { IconChatBubbleRounded } from './IconChatBubbleRounded'
import { IconChatBubbleSharp } from './IconChatBubbleSharp'
import { IconChatBubbleTwoTone } from './IconChatBubbleTwoTone'

export const IconChatBubble = /*#__PURE__*/ props =>
  createThemedIcon(props, IconChatBubbleFilled, IconChatBubbleOutlined, IconChatBubbleRounded, IconChatBubbleSharp, IconChatBubbleTwoTone)
