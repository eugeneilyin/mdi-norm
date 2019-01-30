import { createThemedIcon } from './utils/createThemedIcon'
import { FilledBluetoothAudio } from './FilledBluetoothAudio'
import { OutlineBluetoothAudio } from './OutlineBluetoothAudio'
import { RoundBluetoothAudio } from './RoundBluetoothAudio'
import { SharpBluetoothAudio } from './SharpBluetoothAudio'
import { TwoToneBluetoothAudio } from './TwoToneBluetoothAudio'

export const BluetoothAudio = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledBluetoothAudio, OutlineBluetoothAudio, RoundBluetoothAudio, SharpBluetoothAudio, TwoToneBluetoothAudio)
