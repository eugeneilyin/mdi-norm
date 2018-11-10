import { createThemedIcon } from './utils/createThemedIcon'
import { IconAllInboxFilled } from './IconAllInboxFilled'
import { IconAllInboxOutlined } from './IconAllInboxOutlined'
import { IconAllInboxRounded } from './IconAllInboxRounded'
import { IconAllInboxSharp } from './IconAllInboxSharp'
import { IconAllInboxTwoTone } from './IconAllInboxTwoTone'

export const IconAllInbox = /*#__PURE__*/ props =>
  createThemedIcon(props, IconAllInboxFilled, IconAllInboxOutlined, IconAllInboxRounded, IconAllInboxSharp, IconAllInboxTwoTone)
