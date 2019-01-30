import { createThemedIcon } from './utils/createThemedIcon'
import { FilledBluetoothSearching } from './FilledBluetoothSearching'
import { OutlineBluetoothSearching } from './OutlineBluetoothSearching'
import { RoundBluetoothSearching } from './RoundBluetoothSearching'
import { SharpBluetoothSearching } from './SharpBluetoothSearching'
import { TwoToneBluetoothSearching } from './TwoToneBluetoothSearching'

export const BluetoothSearching = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledBluetoothSearching, OutlineBluetoothSearching, RoundBluetoothSearching, SharpBluetoothSearching, TwoToneBluetoothSearching)
