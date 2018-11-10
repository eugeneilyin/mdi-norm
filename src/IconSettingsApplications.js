import { createThemedIcon } from './utils/createThemedIcon'
import { IconSettingsApplicationsFilled } from './IconSettingsApplicationsFilled'
import { IconSettingsApplicationsOutlined } from './IconSettingsApplicationsOutlined'
import { IconSettingsApplicationsRounded } from './IconSettingsApplicationsRounded'
import { IconSettingsApplicationsSharp } from './IconSettingsApplicationsSharp'
import { IconSettingsApplicationsTwoTone } from './IconSettingsApplicationsTwoTone'

export const IconSettingsApplications = /*#__PURE__*/ props =>
  createThemedIcon(props, IconSettingsApplicationsFilled, IconSettingsApplicationsOutlined, IconSettingsApplicationsRounded, IconSettingsApplicationsSharp, IconSettingsApplicationsTwoTone)
