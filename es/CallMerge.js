import { createThemedIcon } from './utils/createThemedIcon';
import { FilledCallMerge } from './FilledCallMerge';
import { OutlineCallMerge } from './OutlineCallMerge';
import { RoundCallMerge } from './RoundCallMerge';
import { SharpCallMerge } from './SharpCallMerge';
import { TwoToneCallMerge } from './TwoToneCallMerge';
export var CallMerge =
/*#__PURE__*/
function CallMerge(props) {
  return createThemedIcon(props, FilledCallMerge, OutlineCallMerge, RoundCallMerge, SharpCallMerge, TwoToneCallMerge);
};