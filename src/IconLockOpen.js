import { createThemedIcon } from './utils/createThemedIcon'
import { IconLockOpenFilled } from './IconLockOpenFilled'
import { IconLockOpenOutlined } from './IconLockOpenOutlined'
import { IconLockOpenRounded } from './IconLockOpenRounded'
import { IconLockOpenSharp } from './IconLockOpenSharp'
import { IconLockOpenTwoTone } from './IconLockOpenTwoTone'

export const IconLockOpen = /*#__PURE__*/ props =>
  createThemedIcon(props, IconLockOpenFilled, IconLockOpenOutlined, IconLockOpenRounded, IconLockOpenSharp, IconLockOpenTwoTone)
