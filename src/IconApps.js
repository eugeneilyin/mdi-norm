import { createThemedIcon } from './utils/createThemedIcon'
import { IconAppsFilled } from './IconAppsFilled'
import { IconAppsOutlined } from './IconAppsOutlined'
import { IconAppsRounded } from './IconAppsRounded'
import { IconAppsSharp } from './IconAppsSharp'
import { IconAppsTwoTone } from './IconAppsTwoTone'

export const IconApps = /*#__PURE__*/ props =>
  createThemedIcon(props, IconAppsFilled, IconAppsOutlined, IconAppsRounded, IconAppsSharp, IconAppsTwoTone)
