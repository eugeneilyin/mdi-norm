import { createThemedIcon } from './utils/createThemedIcon';
import { FilledBrightnessAuto } from './FilledBrightnessAuto';
import { OutlineBrightnessAuto } from './OutlineBrightnessAuto';
import { RoundBrightnessAuto } from './RoundBrightnessAuto';
import { SharpBrightnessAuto } from './SharpBrightnessAuto';
import { TwoToneBrightnessAuto } from './TwoToneBrightnessAuto';
export var BrightnessAuto =
/*#__PURE__*/
function BrightnessAuto(props) {
  return createThemedIcon(props, FilledBrightnessAuto, OutlineBrightnessAuto, RoundBrightnessAuto, SharpBrightnessAuto, TwoToneBrightnessAuto);
};