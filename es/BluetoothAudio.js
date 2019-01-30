import { createThemedIcon } from './utils/createThemedIcon';
import { FilledBluetoothAudio } from './FilledBluetoothAudio';
import { OutlineBluetoothAudio } from './OutlineBluetoothAudio';
import { RoundBluetoothAudio } from './RoundBluetoothAudio';
import { SharpBluetoothAudio } from './SharpBluetoothAudio';
import { TwoToneBluetoothAudio } from './TwoToneBluetoothAudio';
export var BluetoothAudio =
/*#__PURE__*/
function BluetoothAudio(props) {
  return createThemedIcon(props, FilledBluetoothAudio, OutlineBluetoothAudio, RoundBluetoothAudio, SharpBluetoothAudio, TwoToneBluetoothAudio);
};