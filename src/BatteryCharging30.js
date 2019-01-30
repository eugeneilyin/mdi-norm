import { createThemedIcon } from './utils/createThemedIcon'
import { FilledBatteryCharging30 } from './FilledBatteryCharging30'
import { OutlineBatteryCharging30 } from './OutlineBatteryCharging30'
import { RoundBatteryCharging30 } from './RoundBatteryCharging30'
import { SharpBatteryCharging30 } from './SharpBatteryCharging30'
import { TwoToneBatteryCharging30 } from './TwoToneBatteryCharging30'

export const BatteryCharging30 = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledBatteryCharging30, OutlineBatteryCharging30, RoundBatteryCharging30, SharpBatteryCharging30, TwoToneBatteryCharging30)
