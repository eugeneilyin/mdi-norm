import { createThemedIcon } from './utils/createThemedIcon';
import { FilledFiberManualRecord } from './FilledFiberManualRecord';
import { OutlineFiberManualRecord } from './OutlineFiberManualRecord';
import { RoundFiberManualRecord } from './RoundFiberManualRecord';
import { SharpFiberManualRecord } from './SharpFiberManualRecord';
import { TwoToneFiberManualRecord } from './TwoToneFiberManualRecord';
export var FiberManualRecord =
/*#__PURE__*/
function FiberManualRecord(props) {
  return createThemedIcon(props, FilledFiberManualRecord, OutlineFiberManualRecord, RoundFiberManualRecord, SharpFiberManualRecord, TwoToneFiberManualRecord);
};