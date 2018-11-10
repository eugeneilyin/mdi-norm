import { createThemedIcon } from './utils/createThemedIcon'
import { IconCardMembershipFilled } from './IconCardMembershipFilled'
import { IconCardMembershipOutlined } from './IconCardMembershipOutlined'
import { IconCardMembershipRounded } from './IconCardMembershipRounded'
import { IconCardMembershipSharp } from './IconCardMembershipSharp'
import { IconCardMembershipTwoTone } from './IconCardMembershipTwoTone'

export const IconCardMembership = /*#__PURE__*/ props =>
  createThemedIcon(props, IconCardMembershipFilled, IconCardMembershipOutlined, IconCardMembershipRounded, IconCardMembershipSharp, IconCardMembershipTwoTone)
