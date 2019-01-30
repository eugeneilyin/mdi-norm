import { createThemedIcon } from './utils/createThemedIcon';
import { FilledPause } from './FilledPause';
import { OutlinePause } from './OutlinePause';
import { RoundPause } from './RoundPause';
import { SharpPause } from './SharpPause';
import { TwoTonePause } from './TwoTonePause';
export var Pause =
/*#__PURE__*/
function Pause(props) {
  return createThemedIcon(props, FilledPause, OutlinePause, RoundPause, SharpPause, TwoTonePause);
};