import { createThemedIcon } from './utils/createThemedIcon';
import { FilledBatteryAlert } from './FilledBatteryAlert';
import { OutlineBatteryAlert } from './OutlineBatteryAlert';
import { RoundBatteryAlert } from './RoundBatteryAlert';
import { SharpBatteryAlert } from './SharpBatteryAlert';
import { TwoToneBatteryAlert } from './TwoToneBatteryAlert';
export var BatteryAlert =
/*#__PURE__*/
function BatteryAlert(props) {
  return createThemedIcon(props, FilledBatteryAlert, OutlineBatteryAlert, RoundBatteryAlert, SharpBatteryAlert, TwoToneBatteryAlert);
};