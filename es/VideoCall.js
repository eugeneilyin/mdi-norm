import { createThemedIcon } from './utils/createThemedIcon';
import { FilledVideoCall } from './FilledVideoCall';
import { OutlineVideoCall } from './OutlineVideoCall';
import { RoundVideoCall } from './RoundVideoCall';
import { SharpVideoCall } from './SharpVideoCall';
import { TwoToneVideoCall } from './TwoToneVideoCall';
export var VideoCall =
/*#__PURE__*/
function VideoCall(props) {
  return createThemedIcon(props, FilledVideoCall, OutlineVideoCall, RoundVideoCall, SharpVideoCall, TwoToneVideoCall);
};