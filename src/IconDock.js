import { createThemedIcon } from './utils/createThemedIcon'
import { IconDockFilled } from './IconDockFilled'
import { IconDockOutlined } from './IconDockOutlined'
import { IconDockRounded } from './IconDockRounded'
import { IconDockSharp } from './IconDockSharp'
import { IconDockTwoTone } from './IconDockTwoTone'

export const IconDock = /*#__PURE__*/ props =>
  createThemedIcon(props, IconDockFilled, IconDockOutlined, IconDockRounded, IconDockSharp, IconDockTwoTone)
