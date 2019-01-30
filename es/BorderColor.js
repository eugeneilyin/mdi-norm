import { createThemedIcon } from './utils/createThemedIcon';
import { FilledBorderColor } from './FilledBorderColor';
import { OutlineBorderColor } from './OutlineBorderColor';
import { RoundBorderColor } from './RoundBorderColor';
import { SharpBorderColor } from './SharpBorderColor';
import { TwoToneBorderColor } from './TwoToneBorderColor';
export var BorderColor =
/*#__PURE__*/
function BorderColor(props) {
  return createThemedIcon(props, FilledBorderColor, OutlineBorderColor, RoundBorderColor, SharpBorderColor, TwoToneBorderColor);
};