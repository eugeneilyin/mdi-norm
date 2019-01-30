import { createThemedIcon } from './utils/createThemedIcon';
import { FilledPriorityHigh } from './FilledPriorityHigh';
import { OutlinePriorityHigh } from './OutlinePriorityHigh';
import { RoundPriorityHigh } from './RoundPriorityHigh';
import { SharpPriorityHigh } from './SharpPriorityHigh';
import { TwoTonePriorityHigh } from './TwoTonePriorityHigh';
export var PriorityHigh =
/*#__PURE__*/
function PriorityHigh(props) {
  return createThemedIcon(props, FilledPriorityHigh, OutlinePriorityHigh, RoundPriorityHigh, SharpPriorityHigh, TwoTonePriorityHigh);
};