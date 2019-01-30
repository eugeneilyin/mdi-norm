import { createThemedIcon } from './utils/createThemedIcon';
import { FilledBluetoothConnected } from './FilledBluetoothConnected';
import { OutlineBluetoothConnected } from './OutlineBluetoothConnected';
import { RoundBluetoothConnected } from './RoundBluetoothConnected';
import { SharpBluetoothConnected } from './SharpBluetoothConnected';
import { TwoToneBluetoothConnected } from './TwoToneBluetoothConnected';
export var BluetoothConnected =
/*#__PURE__*/
function BluetoothConnected(props) {
  return createThemedIcon(props, FilledBluetoothConnected, OutlineBluetoothConnected, RoundBluetoothConnected, SharpBluetoothConnected, TwoToneBluetoothConnected);
};