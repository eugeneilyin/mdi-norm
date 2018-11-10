import { createThemedIcon } from './utils/createThemedIcon'
import { IconInboxFilled } from './IconInboxFilled'
import { IconInboxOutlined } from './IconInboxOutlined'
import { IconInboxRounded } from './IconInboxRounded'
import { IconInboxSharp } from './IconInboxSharp'
import { IconInboxTwoTone } from './IconInboxTwoTone'

export const IconInbox = /*#__PURE__*/ props =>
  createThemedIcon(props, IconInboxFilled, IconInboxOutlined, IconInboxRounded, IconInboxSharp, IconInboxTwoTone)
