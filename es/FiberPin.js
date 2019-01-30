import { createThemedIcon } from './utils/createThemedIcon';
import { FilledFiberPin } from './FilledFiberPin';
import { OutlineFiberPin } from './OutlineFiberPin';
import { RoundFiberPin } from './RoundFiberPin';
import { SharpFiberPin } from './SharpFiberPin';
import { TwoToneFiberPin } from './TwoToneFiberPin';
export var FiberPin =
/*#__PURE__*/
function FiberPin(props) {
  return createThemedIcon(props, FilledFiberPin, OutlineFiberPin, RoundFiberPin, SharpFiberPin, TwoToneFiberPin);
};