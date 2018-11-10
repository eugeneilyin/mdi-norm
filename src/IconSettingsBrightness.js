import { createThemedIcon } from './utils/createThemedIcon'
import { IconSettingsBrightnessFilled } from './IconSettingsBrightnessFilled'
import { IconSettingsBrightnessOutlined } from './IconSettingsBrightnessOutlined'
import { IconSettingsBrightnessRounded } from './IconSettingsBrightnessRounded'
import { IconSettingsBrightnessSharp } from './IconSettingsBrightnessSharp'
import { IconSettingsBrightnessTwoTone } from './IconSettingsBrightnessTwoTone'

export const IconSettingsBrightness = /*#__PURE__*/ props =>
  createThemedIcon(props, IconSettingsBrightnessFilled, IconSettingsBrightnessOutlined, IconSettingsBrightnessRounded, IconSettingsBrightnessSharp, IconSettingsBrightnessTwoTone)
