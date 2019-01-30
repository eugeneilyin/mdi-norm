import { createThemedIcon } from './utils/createThemedIcon';
import { FilledCallEnd } from './FilledCallEnd';
import { OutlineCallEnd } from './OutlineCallEnd';
import { RoundCallEnd } from './RoundCallEnd';
import { SharpCallEnd } from './SharpCallEnd';
import { TwoToneCallEnd } from './TwoToneCallEnd';
export var CallEnd =
/*#__PURE__*/
function CallEnd(props) {
  return createThemedIcon(props, FilledCallEnd, OutlineCallEnd, RoundCallEnd, SharpCallEnd, TwoToneCallEnd);
};