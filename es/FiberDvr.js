import { createThemedIcon } from './utils/createThemedIcon';
import { FilledFiberDvr } from './FilledFiberDvr';
import { OutlineFiberDvr } from './OutlineFiberDvr';
import { RoundFiberDvr } from './RoundFiberDvr';
import { SharpFiberDvr } from './SharpFiberDvr';
import { TwoToneFiberDvr } from './TwoToneFiberDvr';
export var FiberDvr =
/*#__PURE__*/
function FiberDvr(props) {
  return createThemedIcon(props, FilledFiberDvr, OutlineFiberDvr, RoundFiberDvr, SharpFiberDvr, TwoToneFiberDvr);
};