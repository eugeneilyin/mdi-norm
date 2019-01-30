import { createThemedIcon } from './utils/createThemedIcon'
import { FilledBatteryUnknown } from './FilledBatteryUnknown'
import { OutlineBatteryUnknown } from './OutlineBatteryUnknown'
import { RoundBatteryUnknown } from './RoundBatteryUnknown'
import { SharpBatteryUnknown } from './SharpBatteryUnknown'
import { TwoToneBatteryUnknown } from './TwoToneBatteryUnknown'

export const BatteryUnknown = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledBatteryUnknown, OutlineBatteryUnknown, RoundBatteryUnknown, SharpBatteryUnknown, TwoToneBatteryUnknown)
