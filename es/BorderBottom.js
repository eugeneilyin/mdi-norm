import { createThemedIcon } from './utils/createThemedIcon';
import { FilledBorderBottom } from './FilledBorderBottom';
import { OutlineBorderBottom } from './OutlineBorderBottom';
import { RoundBorderBottom } from './RoundBorderBottom';
import { SharpBorderBottom } from './SharpBorderBottom';
import { TwoToneBorderBottom } from './TwoToneBorderBottom';
export var BorderBottom =
/*#__PURE__*/
function BorderBottom(props) {
  return createThemedIcon(props, FilledBorderBottom, OutlineBorderBottom, RoundBorderBottom, SharpBorderBottom, TwoToneBorderBottom);
};