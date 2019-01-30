import { createThemedIcon } from './utils/createThemedIcon';
import { FilledBluetooth } from './FilledBluetooth';
import { OutlineBluetooth } from './OutlineBluetooth';
import { RoundBluetooth } from './RoundBluetooth';
import { SharpBluetooth } from './SharpBluetooth';
import { TwoToneBluetooth } from './TwoToneBluetooth';
export var Bluetooth =
/*#__PURE__*/
function Bluetooth(props) {
  return createThemedIcon(props, FilledBluetooth, OutlineBluetooth, RoundBluetooth, SharpBluetooth, TwoToneBluetooth);
};