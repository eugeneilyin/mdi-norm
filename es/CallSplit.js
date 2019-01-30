import { createThemedIcon } from './utils/createThemedIcon';
import { FilledCallSplit } from './FilledCallSplit';
import { OutlineCallSplit } from './OutlineCallSplit';
import { RoundCallSplit } from './RoundCallSplit';
import { SharpCallSplit } from './SharpCallSplit';
import { TwoToneCallSplit } from './TwoToneCallSplit';
export var CallSplit =
/*#__PURE__*/
function CallSplit(props) {
  return createThemedIcon(props, FilledCallSplit, OutlineCallSplit, RoundCallSplit, SharpCallSplit, TwoToneCallSplit);
};