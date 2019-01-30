import { createThemedIcon } from './utils/createThemedIcon'
import { FilledBluetooth } from './FilledBluetooth'
import { OutlineBluetooth } from './OutlineBluetooth'
import { RoundBluetooth } from './RoundBluetooth'
import { SharpBluetooth } from './SharpBluetooth'
import { TwoToneBluetooth } from './TwoToneBluetooth'

export const Bluetooth = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledBluetooth, OutlineBluetooth, RoundBluetooth, SharpBluetooth, TwoToneBluetooth)
