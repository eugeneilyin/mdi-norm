import { createThemedIcon } from './utils/createThemedIcon';
import { FilledBorderRight } from './FilledBorderRight';
import { OutlineBorderRight } from './OutlineBorderRight';
import { RoundBorderRight } from './RoundBorderRight';
import { SharpBorderRight } from './SharpBorderRight';
import { TwoToneBorderRight } from './TwoToneBorderRight';
export var BorderRight =
/*#__PURE__*/
function BorderRight(props) {
  return createThemedIcon(props, FilledBorderRight, OutlineBorderRight, RoundBorderRight, SharpBorderRight, TwoToneBorderRight);
};