import { createThemedIcon } from './utils/createThemedIcon';
import { FilledPowerOff } from './FilledPowerOff';
import { OutlinePowerOff } from './OutlinePowerOff';
import { RoundPowerOff } from './RoundPowerOff';
import { SharpPowerOff } from './SharpPowerOff';
import { TwoTonePowerOff } from './TwoTonePowerOff';
export var PowerOff =
/*#__PURE__*/
function PowerOff(props) {
  return createThemedIcon(props, FilledPowerOff, OutlinePowerOff, RoundPowerOff, SharpPowerOff, TwoTonePowerOff);
};