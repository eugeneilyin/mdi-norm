import { createThemedIcon } from './utils/createThemedIcon';
import { FilledDirectionsRun } from './FilledDirectionsRun';
import { OutlineDirectionsRun } from './OutlineDirectionsRun';
import { RoundDirectionsRun } from './RoundDirectionsRun';
import { SharpDirectionsRun } from './SharpDirectionsRun';
import { TwoToneDirectionsRun } from './TwoToneDirectionsRun';
export var DirectionsRun =
/*#__PURE__*/
function DirectionsRun(props) {
  return createThemedIcon(props, FilledDirectionsRun, OutlineDirectionsRun, RoundDirectionsRun, SharpDirectionsRun, TwoToneDirectionsRun);
};