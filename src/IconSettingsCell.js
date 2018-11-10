import { createThemedIcon } from './utils/createThemedIcon'
import { IconSettingsCellFilled } from './IconSettingsCellFilled'
import { IconSettingsCellOutlined } from './IconSettingsCellOutlined'
import { IconSettingsCellRounded } from './IconSettingsCellRounded'
import { IconSettingsCellSharp } from './IconSettingsCellSharp'
import { IconSettingsCellTwoTone } from './IconSettingsCellTwoTone'

export const IconSettingsCell = /*#__PURE__*/ props =>
  createThemedIcon(props, IconSettingsCellFilled, IconSettingsCellOutlined, IconSettingsCellRounded, IconSettingsCellSharp, IconSettingsCellTwoTone)
