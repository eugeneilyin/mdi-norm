import { createThemedIcon } from './utils/createThemedIcon';
import { FilledBorderAll } from './FilledBorderAll';
import { OutlineBorderAll } from './OutlineBorderAll';
import { RoundBorderAll } from './RoundBorderAll';
import { SharpBorderAll } from './SharpBorderAll';
import { TwoToneBorderAll } from './TwoToneBorderAll';
export var BorderAll =
/*#__PURE__*/
function BorderAll(props) {
  return createThemedIcon(props, FilledBorderAll, OutlineBorderAll, RoundBorderAll, SharpBorderAll, TwoToneBorderAll);
};