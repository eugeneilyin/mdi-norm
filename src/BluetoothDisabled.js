import { createThemedIcon } from './utils/createThemedIcon'
import { FilledBluetoothDisabled } from './FilledBluetoothDisabled'
import { OutlineBluetoothDisabled } from './OutlineBluetoothDisabled'
import { RoundBluetoothDisabled } from './RoundBluetoothDisabled'
import { SharpBluetoothDisabled } from './SharpBluetoothDisabled'
import { TwoToneBluetoothDisabled } from './TwoToneBluetoothDisabled'

export const BluetoothDisabled = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledBluetoothDisabled, OutlineBluetoothDisabled, RoundBluetoothDisabled, SharpBluetoothDisabled, TwoToneBluetoothDisabled)
