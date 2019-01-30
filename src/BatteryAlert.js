import { createThemedIcon } from './utils/createThemedIcon'
import { FilledBatteryAlert } from './FilledBatteryAlert'
import { OutlineBatteryAlert } from './OutlineBatteryAlert'
import { RoundBatteryAlert } from './RoundBatteryAlert'
import { SharpBatteryAlert } from './SharpBatteryAlert'
import { TwoToneBatteryAlert } from './TwoToneBatteryAlert'

export const BatteryAlert = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledBatteryAlert, OutlineBatteryAlert, RoundBatteryAlert, SharpBatteryAlert, TwoToneBatteryAlert)
