import { createThemedIcon } from './utils/createThemedIcon'
import { IconReplyFilled } from './IconReplyFilled'
import { IconReplyOutlined } from './IconReplyOutlined'
import { IconReplyRounded } from './IconReplyRounded'
import { IconReplySharp } from './IconReplySharp'
import { IconReplyTwoTone } from './IconReplyTwoTone'

export const IconReply = /*#__PURE__*/ props =>
  createThemedIcon(props, IconReplyFilled, IconReplyOutlined, IconReplyRounded, IconReplySharp, IconReplyTwoTone)
