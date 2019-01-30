import { createThemedIcon } from './utils/createThemedIcon';
import { FilledPauseCircleOutline } from './FilledPauseCircleOutline';
import { OutlinePauseCircleOutline } from './OutlinePauseCircleOutline';
import { RoundPauseCircleOutline } from './RoundPauseCircleOutline';
import { SharpPauseCircleOutline } from './SharpPauseCircleOutline';
import { TwoTonePauseCircleOutline } from './TwoTonePauseCircleOutline';
export var PauseCircleOutline =
/*#__PURE__*/
function PauseCircleOutline(props) {
  return createThemedIcon(props, FilledPauseCircleOutline, OutlinePauseCircleOutline, RoundPauseCircleOutline, SharpPauseCircleOutline, TwoTonePauseCircleOutline);
};