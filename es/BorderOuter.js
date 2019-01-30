import { createThemedIcon } from './utils/createThemedIcon';
import { FilledBorderOuter } from './FilledBorderOuter';
import { OutlineBorderOuter } from './OutlineBorderOuter';
import { RoundBorderOuter } from './RoundBorderOuter';
import { SharpBorderOuter } from './SharpBorderOuter';
import { TwoToneBorderOuter } from './TwoToneBorderOuter';
export var BorderOuter =
/*#__PURE__*/
function BorderOuter(props) {
  return createThemedIcon(props, FilledBorderOuter, OutlineBorderOuter, RoundBorderOuter, SharpBorderOuter, TwoToneBorderOuter);
};