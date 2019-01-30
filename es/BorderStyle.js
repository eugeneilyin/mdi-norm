import { createThemedIcon } from './utils/createThemedIcon';
import { FilledBorderStyle } from './FilledBorderStyle';
import { OutlineBorderStyle } from './OutlineBorderStyle';
import { RoundBorderStyle } from './RoundBorderStyle';
import { SharpBorderStyle } from './SharpBorderStyle';
import { TwoToneBorderStyle } from './TwoToneBorderStyle';
export var BorderStyle =
/*#__PURE__*/
function BorderStyle(props) {
  return createThemedIcon(props, FilledBorderStyle, OutlineBorderStyle, RoundBorderStyle, SharpBorderStyle, TwoToneBorderStyle);
};