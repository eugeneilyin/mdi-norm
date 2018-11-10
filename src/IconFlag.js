import { createThemedIcon } from './utils/createThemedIcon'
import { IconFlagFilled } from './IconFlagFilled'
import { IconFlagOutlined } from './IconFlagOutlined'
import { IconFlagRounded } from './IconFlagRounded'
import { IconFlagSharp } from './IconFlagSharp'
import { IconFlagTwoTone } from './IconFlagTwoTone'

export const IconFlag = /*#__PURE__*/ props =>
  createThemedIcon(props, IconFlagFilled, IconFlagOutlined, IconFlagRounded, IconFlagSharp, IconFlagTwoTone)
