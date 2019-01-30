import { createThemedIcon } from './utils/createThemedIcon';
import { FilledCallReceived } from './FilledCallReceived';
import { OutlineCallReceived } from './OutlineCallReceived';
import { RoundCallReceived } from './RoundCallReceived';
import { SharpCallReceived } from './SharpCallReceived';
import { TwoToneCallReceived } from './TwoToneCallReceived';
export var CallReceived =
/*#__PURE__*/
function CallReceived(props) {
  return createThemedIcon(props, FilledCallReceived, OutlineCallReceived, RoundCallReceived, SharpCallReceived, TwoToneCallReceived);
};