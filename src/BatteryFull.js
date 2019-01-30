import { createThemedIcon } from './utils/createThemedIcon'
import { FilledBatteryFull } from './FilledBatteryFull'
import { OutlineBatteryFull } from './OutlineBatteryFull'
import { RoundBatteryFull } from './RoundBatteryFull'
import { SharpBatteryFull } from './SharpBatteryFull'
import { TwoToneBatteryFull } from './TwoToneBatteryFull'

export const BatteryFull = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledBatteryFull, OutlineBatteryFull, RoundBatteryFull, SharpBatteryFull, TwoToneBatteryFull)
