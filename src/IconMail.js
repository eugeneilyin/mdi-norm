import { createThemedIcon } from './utils/createThemedIcon'
import { IconMailFilled } from './IconMailFilled'
import { IconMailOutlined } from './IconMailOutlined'
import { IconMailRounded } from './IconMailRounded'
import { IconMailSharp } from './IconMailSharp'
import { IconMailTwoTone } from './IconMailTwoTone'

export const IconMail = /*#__PURE__*/ props =>
  createThemedIcon(props, IconMailFilled, IconMailOutlined, IconMailRounded, IconMailSharp, IconMailTwoTone)
