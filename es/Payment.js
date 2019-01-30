import { createThemedIcon } from './utils/createThemedIcon';
import { FilledPayment } from './FilledPayment';
import { OutlinePayment } from './OutlinePayment';
import { RoundPayment } from './RoundPayment';
import { SharpPayment } from './SharpPayment';
import { TwoTonePayment } from './TwoTonePayment';
export var Payment =
/*#__PURE__*/
function Payment(props) {
  return createThemedIcon(props, FilledPayment, OutlinePayment, RoundPayment, SharpPayment, TwoTonePayment);
};