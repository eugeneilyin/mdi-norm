import { createThemedIcon } from './utils/createThemedIcon';
import { FilledPausePresentation } from './FilledPausePresentation';
import { OutlinePausePresentation } from './OutlinePausePresentation';
import { RoundPausePresentation } from './RoundPausePresentation';
import { SharpPausePresentation } from './SharpPausePresentation';
import { TwoTonePausePresentation } from './TwoTonePausePresentation';
export var PausePresentation =
/*#__PURE__*/
function PausePresentation(props) {
  return createThemedIcon(props, FilledPausePresentation, OutlinePausePresentation, RoundPausePresentation, SharpPausePresentation, TwoTonePausePresentation);
};