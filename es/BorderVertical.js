import { createThemedIcon } from './utils/createThemedIcon';
import { FilledBorderVertical } from './FilledBorderVertical';
import { OutlineBorderVertical } from './OutlineBorderVertical';
import { RoundBorderVertical } from './RoundBorderVertical';
import { SharpBorderVertical } from './SharpBorderVertical';
import { TwoToneBorderVertical } from './TwoToneBorderVertical';
export var BorderVertical =
/*#__PURE__*/
function BorderVertical(props) {
  return createThemedIcon(props, FilledBorderVertical, OutlineBorderVertical, RoundBorderVertical, SharpBorderVertical, TwoToneBorderVertical);
};