import { createThemedIcon } from './utils/createThemedIcon'
import { IconSendFilled } from './IconSendFilled'
import { IconSendOutlined } from './IconSendOutlined'
import { IconSendRounded } from './IconSendRounded'
import { IconSendSharp } from './IconSendSharp'
import { IconSendTwoTone } from './IconSendTwoTone'

export const IconSend = /*#__PURE__*/ props =>
  createThemedIcon(props, IconSendFilled, IconSendOutlined, IconSendRounded, IconSendSharp, IconSendTwoTone)
