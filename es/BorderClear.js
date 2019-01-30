import { createThemedIcon } from './utils/createThemedIcon';
import { FilledBorderClear } from './FilledBorderClear';
import { OutlineBorderClear } from './OutlineBorderClear';
import { RoundBorderClear } from './RoundBorderClear';
import { SharpBorderClear } from './SharpBorderClear';
import { TwoToneBorderClear } from './TwoToneBorderClear';
export var BorderClear =
/*#__PURE__*/
function BorderClear(props) {
  return createThemedIcon(props, FilledBorderClear, OutlineBorderClear, RoundBorderClear, SharpBorderClear, TwoToneBorderClear);
};