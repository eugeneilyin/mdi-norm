import { createThemedIcon } from './utils/createThemedIcon';
import { FilledBorderInner } from './FilledBorderInner';
import { OutlineBorderInner } from './OutlineBorderInner';
import { RoundBorderInner } from './RoundBorderInner';
import { SharpBorderInner } from './SharpBorderInner';
import { TwoToneBorderInner } from './TwoToneBorderInner';
export var BorderInner =
/*#__PURE__*/
function BorderInner(props) {
  return createThemedIcon(props, FilledBorderInner, OutlineBorderInner, RoundBorderInner, SharpBorderInner, TwoToneBorderInner);
};