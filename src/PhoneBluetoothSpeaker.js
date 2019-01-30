import { createThemedIcon } from './utils/createThemedIcon'
import { FilledPhoneBluetoothSpeaker } from './FilledPhoneBluetoothSpeaker'
import { OutlinePhoneBluetoothSpeaker } from './OutlinePhoneBluetoothSpeaker'
import { RoundPhoneBluetoothSpeaker } from './RoundPhoneBluetoothSpeaker'
import { SharpPhoneBluetoothSpeaker } from './SharpPhoneBluetoothSpeaker'
import { TwoTonePhoneBluetoothSpeaker } from './TwoTonePhoneBluetoothSpeaker'

export const PhoneBluetoothSpeaker = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledPhoneBluetoothSpeaker, OutlinePhoneBluetoothSpeaker, RoundPhoneBluetoothSpeaker, SharpPhoneBluetoothSpeaker, TwoTonePhoneBluetoothSpeaker)
