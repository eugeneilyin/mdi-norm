import { createThemedIcon } from './utils/createThemedIcon'
import { IconLaunchFilled } from './IconLaunchFilled'
import { IconLaunchOutlined } from './IconLaunchOutlined'
import { IconLaunchRounded } from './IconLaunchRounded'
import { IconLaunchSharp } from './IconLaunchSharp'
import { IconLaunchTwoTone } from './IconLaunchTwoTone'

export const IconLaunch = /*#__PURE__*/ props =>
  createThemedIcon(props, IconLaunchFilled, IconLaunchOutlined, IconLaunchRounded, IconLaunchSharp, IconLaunchTwoTone)
