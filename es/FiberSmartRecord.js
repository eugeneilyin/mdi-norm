import { createThemedIcon } from './utils/createThemedIcon';
import { FilledFiberSmartRecord } from './FilledFiberSmartRecord';
import { OutlineFiberSmartRecord } from './OutlineFiberSmartRecord';
import { RoundFiberSmartRecord } from './RoundFiberSmartRecord';
import { SharpFiberSmartRecord } from './SharpFiberSmartRecord';
import { TwoToneFiberSmartRecord } from './TwoToneFiberSmartRecord';
export var FiberSmartRecord =
/*#__PURE__*/
function FiberSmartRecord(props) {
  return createThemedIcon(props, FilledFiberSmartRecord, OutlineFiberSmartRecord, RoundFiberSmartRecord, SharpFiberSmartRecord, TwoToneFiberSmartRecord);
};