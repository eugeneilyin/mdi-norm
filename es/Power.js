import { createThemedIcon } from './utils/createThemedIcon';
import { FilledPower } from './FilledPower';
import { OutlinePower } from './OutlinePower';
import { RoundPower } from './RoundPower';
import { SharpPower } from './SharpPower';
import { TwoTonePower } from './TwoTonePower';
export var Power =
/*#__PURE__*/
function Power(props) {
  return createThemedIcon(props, FilledPower, OutlinePower, RoundPower, SharpPower, TwoTonePower);
};