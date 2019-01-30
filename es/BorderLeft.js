import { createThemedIcon } from './utils/createThemedIcon';
import { FilledBorderLeft } from './FilledBorderLeft';
import { OutlineBorderLeft } from './OutlineBorderLeft';
import { RoundBorderLeft } from './RoundBorderLeft';
import { SharpBorderLeft } from './SharpBorderLeft';
import { TwoToneBorderLeft } from './TwoToneBorderLeft';
export var BorderLeft =
/*#__PURE__*/
function BorderLeft(props) {
  return createThemedIcon(props, FilledBorderLeft, OutlineBorderLeft, RoundBorderLeft, SharpBorderLeft, TwoToneBorderLeft);
};