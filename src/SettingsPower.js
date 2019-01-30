import { createThemedIcon } from './utils/createThemedIcon'
import { FilledSettingsPower } from './FilledSettingsPower'
import { OutlineSettingsPower } from './OutlineSettingsPower'
import { RoundSettingsPower } from './RoundSettingsPower'
import { SharpSettingsPower } from './SharpSettingsPower'
import { TwoToneSettingsPower } from './TwoToneSettingsPower'

export const SettingsPower = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledSettingsPower, OutlineSettingsPower, RoundSettingsPower, SharpSettingsPower, TwoToneSettingsPower)
