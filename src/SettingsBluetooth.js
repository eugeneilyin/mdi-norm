import { createThemedIcon } from './utils/createThemedIcon'
import { FilledSettingsBluetooth } from './FilledSettingsBluetooth'
import { OutlineSettingsBluetooth } from './OutlineSettingsBluetooth'
import { RoundSettingsBluetooth } from './RoundSettingsBluetooth'
import { SharpSettingsBluetooth } from './SharpSettingsBluetooth'
import { TwoToneSettingsBluetooth } from './TwoToneSettingsBluetooth'

export const SettingsBluetooth = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledSettingsBluetooth, OutlineSettingsBluetooth, RoundSettingsBluetooth, SharpSettingsBluetooth, TwoToneSettingsBluetooth)
