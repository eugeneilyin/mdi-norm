import { createThemedIcon } from './utils/createThemedIcon';
import { FilledBatteryUnknown } from './FilledBatteryUnknown';
import { OutlineBatteryUnknown } from './OutlineBatteryUnknown';
import { RoundBatteryUnknown } from './RoundBatteryUnknown';
import { SharpBatteryUnknown } from './SharpBatteryUnknown';
import { TwoToneBatteryUnknown } from './TwoToneBatteryUnknown';
export var BatteryUnknown =
/*#__PURE__*/
function BatteryUnknown(props) {
  return createThemedIcon(props, FilledBatteryUnknown, OutlineBatteryUnknown, RoundBatteryUnknown, SharpBatteryUnknown, TwoToneBatteryUnknown);
};