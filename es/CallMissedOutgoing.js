import { createThemedIcon } from './utils/createThemedIcon';
import { FilledCallMissedOutgoing } from './FilledCallMissedOutgoing';
import { OutlineCallMissedOutgoing } from './OutlineCallMissedOutgoing';
import { RoundCallMissedOutgoing } from './RoundCallMissedOutgoing';
import { SharpCallMissedOutgoing } from './SharpCallMissedOutgoing';
import { TwoToneCallMissedOutgoing } from './TwoToneCallMissedOutgoing';
export var CallMissedOutgoing =
/*#__PURE__*/
function CallMissedOutgoing(props) {
  return createThemedIcon(props, FilledCallMissedOutgoing, OutlineCallMissedOutgoing, RoundCallMissedOutgoing, SharpCallMissedOutgoing, TwoToneCallMissedOutgoing);
};