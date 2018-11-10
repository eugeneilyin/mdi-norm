import { createThemedIcon } from './utils/createThemedIcon'
import { IconLockFilled } from './IconLockFilled'
import { IconLockOutlined } from './IconLockOutlined'
import { IconLockRounded } from './IconLockRounded'
import { IconLockSharp } from './IconLockSharp'
import { IconLockTwoTone } from './IconLockTwoTone'

export const IconLock = /*#__PURE__*/ props =>
  createThemedIcon(props, IconLockFilled, IconLockOutlined, IconLockRounded, IconLockSharp, IconLockTwoTone)
