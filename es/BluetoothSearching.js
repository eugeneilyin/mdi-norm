import { createThemedIcon } from './utils/createThemedIcon';
import { FilledBluetoothSearching } from './FilledBluetoothSearching';
import { OutlineBluetoothSearching } from './OutlineBluetoothSearching';
import { RoundBluetoothSearching } from './RoundBluetoothSearching';
import { SharpBluetoothSearching } from './SharpBluetoothSearching';
import { TwoToneBluetoothSearching } from './TwoToneBluetoothSearching';
export var BluetoothSearching =
/*#__PURE__*/
function BluetoothSearching(props) {
  return createThemedIcon(props, FilledBluetoothSearching, OutlineBluetoothSearching, RoundBluetoothSearching, SharpBluetoothSearching, TwoToneBluetoothSearching);
};