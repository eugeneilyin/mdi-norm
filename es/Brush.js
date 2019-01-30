import { createThemedIcon } from './utils/createThemedIcon';
import { FilledBrush } from './FilledBrush';
import { OutlineBrush } from './OutlineBrush';
import { RoundBrush } from './RoundBrush';
import { SharpBrush } from './SharpBrush';
import { TwoToneBrush } from './TwoToneBrush';
export var Brush =
/*#__PURE__*/
function Brush(props) {
  return createThemedIcon(props, FilledBrush, OutlineBrush, RoundBrush, SharpBrush, TwoToneBrush);
};