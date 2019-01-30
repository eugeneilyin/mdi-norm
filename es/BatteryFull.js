import { createThemedIcon } from './utils/createThemedIcon';
import { FilledBatteryFull } from './FilledBatteryFull';
import { OutlineBatteryFull } from './OutlineBatteryFull';
import { RoundBatteryFull } from './RoundBatteryFull';
import { SharpBatteryFull } from './SharpBatteryFull';
import { TwoToneBatteryFull } from './TwoToneBatteryFull';
export var BatteryFull =
/*#__PURE__*/
function BatteryFull(props) {
  return createThemedIcon(props, FilledBatteryFull, OutlineBatteryFull, RoundBatteryFull, SharpBatteryFull, TwoToneBatteryFull);
};