import { createThemedIcon } from './utils/createThemedIcon'
import { IconSecurityFilled } from './IconSecurityFilled'
import { IconSecurityOutlined } from './IconSecurityOutlined'
import { IconSecurityRounded } from './IconSecurityRounded'
import { IconSecuritySharp } from './IconSecuritySharp'
import { IconSecurityTwoTone } from './IconSecurityTwoTone'

export const IconSecurity = /*#__PURE__*/ props =>
  createThemedIcon(props, IconSecurityFilled, IconSecurityOutlined, IconSecurityRounded, IconSecuritySharp, IconSecurityTwoTone)
