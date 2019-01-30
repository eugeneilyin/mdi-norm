import { createThemedIcon } from './utils/createThemedIcon'
import { FilledBatteryStd } from './FilledBatteryStd'
import { OutlineBatteryStd } from './OutlineBatteryStd'
import { RoundBatteryStd } from './RoundBatteryStd'
import { SharpBatteryStd } from './SharpBatteryStd'
import { TwoToneBatteryStd } from './TwoToneBatteryStd'

export const BatteryStd = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledBatteryStd, OutlineBatteryStd, RoundBatteryStd, SharpBatteryStd, TwoToneBatteryStd)
