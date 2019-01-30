import { createThemedIcon } from './utils/createThemedIcon';
import { FilledBatteryChargingFull } from './FilledBatteryChargingFull';
import { OutlineBatteryChargingFull } from './OutlineBatteryChargingFull';
import { RoundBatteryChargingFull } from './RoundBatteryChargingFull';
import { SharpBatteryChargingFull } from './SharpBatteryChargingFull';
import { TwoToneBatteryChargingFull } from './TwoToneBatteryChargingFull';
export var BatteryChargingFull =
/*#__PURE__*/
function BatteryChargingFull(props) {
  return createThemedIcon(props, FilledBatteryChargingFull, OutlineBatteryChargingFull, RoundBatteryChargingFull, SharpBatteryChargingFull, TwoToneBatteryChargingFull);
};