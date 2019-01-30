import { createThemedIcon } from './utils/createThemedIcon';
import { FilledMissedVideoCall } from './FilledMissedVideoCall';
import { OutlineMissedVideoCall } from './OutlineMissedVideoCall';
import { RoundMissedVideoCall } from './RoundMissedVideoCall';
import { SharpMissedVideoCall } from './SharpMissedVideoCall';
import { TwoToneMissedVideoCall } from './TwoToneMissedVideoCall';
export var MissedVideoCall =
/*#__PURE__*/
function MissedVideoCall(props) {
  return createThemedIcon(props, FilledMissedVideoCall, OutlineMissedVideoCall, RoundMissedVideoCall, SharpMissedVideoCall, TwoToneMissedVideoCall);
};