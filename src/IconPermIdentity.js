import { createThemedIcon } from './utils/createThemedIcon'
import { IconPermIdentityFilled } from './IconPermIdentityFilled'
import { IconPermIdentityOutlined } from './IconPermIdentityOutlined'
import { IconPermIdentityRounded } from './IconPermIdentityRounded'
import { IconPermIdentitySharp } from './IconPermIdentitySharp'
import { IconPermIdentityTwoTone } from './IconPermIdentityTwoTone'

export const IconPermIdentity = /*#__PURE__*/ props =>
  createThemedIcon(props, IconPermIdentityFilled, IconPermIdentityOutlined, IconPermIdentityRounded, IconPermIdentitySharp, IconPermIdentityTwoTone)
