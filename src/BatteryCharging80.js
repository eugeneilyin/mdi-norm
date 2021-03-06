import { createThemedIcon } from './utils/createThemedIcon'
import { FilledBatteryCharging80 } from './FilledBatteryCharging80'
import { OutlineBatteryCharging80 } from './OutlineBatteryCharging80'
import { RoundBatteryCharging80 } from './RoundBatteryCharging80'
import { SharpBatteryCharging80 } from './SharpBatteryCharging80'
import { TwoToneBatteryCharging80 } from './TwoToneBatteryCharging80'

export const BatteryCharging80 = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledBatteryCharging80, OutlineBatteryCharging80, RoundBatteryCharging80, SharpBatteryCharging80, TwoToneBatteryCharging80)
