import { createThemedIcon } from './utils/createThemedIcon'
import { IconDashboardFilled } from './IconDashboardFilled'
import { IconDashboardOutlined } from './IconDashboardOutlined'
import { IconDashboardRounded } from './IconDashboardRounded'
import { IconDashboardSharp } from './IconDashboardSharp'
import { IconDashboardTwoTone } from './IconDashboardTwoTone'

export const IconDashboard = /*#__PURE__*/ props =>
  createThemedIcon(props, IconDashboardFilled, IconDashboardOutlined, IconDashboardRounded, IconDashboardSharp, IconDashboardTwoTone)
