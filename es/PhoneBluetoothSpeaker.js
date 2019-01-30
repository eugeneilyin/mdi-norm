import { createThemedIcon } from './utils/createThemedIcon';
import { FilledPhoneBluetoothSpeaker } from './FilledPhoneBluetoothSpeaker';
import { OutlinePhoneBluetoothSpeaker } from './OutlinePhoneBluetoothSpeaker';
import { RoundPhoneBluetoothSpeaker } from './RoundPhoneBluetoothSpeaker';
import { SharpPhoneBluetoothSpeaker } from './SharpPhoneBluetoothSpeaker';
import { TwoTonePhoneBluetoothSpeaker } from './TwoTonePhoneBluetoothSpeaker';
export var PhoneBluetoothSpeaker =
/*#__PURE__*/
function PhoneBluetoothSpeaker(props) {
  return createThemedIcon(props, FilledPhoneBluetoothSpeaker, OutlinePhoneBluetoothSpeaker, RoundPhoneBluetoothSpeaker, SharpPhoneBluetoothSpeaker, TwoTonePhoneBluetoothSpeaker);
};