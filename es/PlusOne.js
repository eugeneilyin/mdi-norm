import { createThemedIcon } from './utils/createThemedIcon';
import { FilledPlusOne } from './FilledPlusOne';
import { OutlinePlusOne } from './OutlinePlusOne';
import { RoundPlusOne } from './RoundPlusOne';
import { SharpPlusOne } from './SharpPlusOne';
import { TwoTonePlusOne } from './TwoTonePlusOne';
export var PlusOne =
/*#__PURE__*/
function PlusOne(props) {
  return createThemedIcon(props, FilledPlusOne, OutlinePlusOne, RoundPlusOne, SharpPlusOne, TwoTonePlusOne);
};