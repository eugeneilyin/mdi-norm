import { createThemedIcon } from './utils/createThemedIcon';
import { FilledReceipt } from './FilledReceipt';
import { OutlineReceipt } from './OutlineReceipt';
import { RoundReceipt } from './RoundReceipt';
import { SharpReceipt } from './SharpReceipt';
import { TwoToneReceipt } from './TwoToneReceipt';
export var Receipt =
/*#__PURE__*/
function Receipt(props) {
  return createThemedIcon(props, FilledReceipt, OutlineReceipt, RoundReceipt, SharpReceipt, TwoToneReceipt);
};