import { createThemedIcon } from './utils/createThemedIcon'
import { FilledBluetoothConnected } from './FilledBluetoothConnected'
import { OutlineBluetoothConnected } from './OutlineBluetoothConnected'
import { RoundBluetoothConnected } from './RoundBluetoothConnected'
import { SharpBluetoothConnected } from './SharpBluetoothConnected'
import { TwoToneBluetoothConnected } from './TwoToneBluetoothConnected'

export const BluetoothConnected = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledBluetoothConnected, OutlineBluetoothConnected, RoundBluetoothConnected, SharpBluetoothConnected, TwoToneBluetoothConnected)
