import { createThemedIcon } from './utils/createThemedIcon';
import { FilledPinDrop } from './FilledPinDrop';
import { OutlinePinDrop } from './OutlinePinDrop';
import { RoundPinDrop } from './RoundPinDrop';
import { SharpPinDrop } from './SharpPinDrop';
import { TwoTonePinDrop } from './TwoTonePinDrop';
export var PinDrop =
/*#__PURE__*/
function PinDrop(props) {
  return createThemedIcon(props, FilledPinDrop, OutlinePinDrop, RoundPinDrop, SharpPinDrop, TwoTonePinDrop);
};