import { createThemedIcon } from './utils/createThemedIcon'
import { FilledSettingsPhone } from './FilledSettingsPhone'
import { OutlineSettingsPhone } from './OutlineSettingsPhone'
import { RoundSettingsPhone } from './RoundSettingsPhone'
import { SharpSettingsPhone } from './SharpSettingsPhone'
import { TwoToneSettingsPhone } from './TwoToneSettingsPhone'

export const SettingsPhone = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledSettingsPhone, OutlineSettingsPhone, RoundSettingsPhone, SharpSettingsPhone, TwoToneSettingsPhone)
