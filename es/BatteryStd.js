import { createThemedIcon } from './utils/createThemedIcon';
import { FilledBatteryStd } from './FilledBatteryStd';
import { OutlineBatteryStd } from './OutlineBatteryStd';
import { RoundBatteryStd } from './RoundBatteryStd';
import { SharpBatteryStd } from './SharpBatteryStd';
import { TwoToneBatteryStd } from './TwoToneBatteryStd';
export var BatteryStd =
/*#__PURE__*/
function BatteryStd(props) {
  return createThemedIcon(props, FilledBatteryStd, OutlineBatteryStd, RoundBatteryStd, SharpBatteryStd, TwoToneBatteryStd);
};