import { createThemedIcon } from './utils/createThemedIcon';
import { FilledCallMissed } from './FilledCallMissed';
import { OutlineCallMissed } from './OutlineCallMissed';
import { RoundCallMissed } from './RoundCallMissed';
import { SharpCallMissed } from './SharpCallMissed';
import { TwoToneCallMissed } from './TwoToneCallMissed';
export var CallMissed =
/*#__PURE__*/
function CallMissed(props) {
  return createThemedIcon(props, FilledCallMissed, OutlineCallMissed, RoundCallMissed, SharpCallMissed, TwoToneCallMissed);
};