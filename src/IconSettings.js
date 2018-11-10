import { createThemedIcon } from './utils/createThemedIcon'
import { IconSettingsFilled } from './IconSettingsFilled'
import { IconSettingsOutlined } from './IconSettingsOutlined'
import { IconSettingsRounded } from './IconSettingsRounded'
import { IconSettingsSharp } from './IconSettingsSharp'
import { IconSettingsTwoTone } from './IconSettingsTwoTone'

export const IconSettings = /*#__PURE__*/ props =>
  createThemedIcon(props, IconSettingsFilled, IconSettingsOutlined, IconSettingsRounded, IconSettingsSharp, IconSettingsTwoTone)
