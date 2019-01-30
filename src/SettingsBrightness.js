import { createThemedIcon } from './utils/createThemedIcon'
import { FilledSettingsBrightness } from './FilledSettingsBrightness'
import { OutlineSettingsBrightness } from './OutlineSettingsBrightness'
import { RoundSettingsBrightness } from './RoundSettingsBrightness'
import { SharpSettingsBrightness } from './SharpSettingsBrightness'
import { TwoToneSettingsBrightness } from './TwoToneSettingsBrightness'

export const SettingsBrightness = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledSettingsBrightness, OutlineSettingsBrightness, RoundSettingsBrightness, SharpSettingsBrightness, TwoToneSettingsBrightness)
