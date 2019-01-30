import { createThemedIcon } from './utils/createThemedIcon';
import { FilledBorderHorizontal } from './FilledBorderHorizontal';
import { OutlineBorderHorizontal } from './OutlineBorderHorizontal';
import { RoundBorderHorizontal } from './RoundBorderHorizontal';
import { SharpBorderHorizontal } from './SharpBorderHorizontal';
import { TwoToneBorderHorizontal } from './TwoToneBorderHorizontal';
export var BorderHorizontal =
/*#__PURE__*/
function BorderHorizontal(props) {
  return createThemedIcon(props, FilledBorderHorizontal, OutlineBorderHorizontal, RoundBorderHorizontal, SharpBorderHorizontal, TwoToneBorderHorizontal);
};