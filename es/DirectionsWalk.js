import { createThemedIcon } from './utils/createThemedIcon';
import { FilledDirectionsWalk } from './FilledDirectionsWalk';
import { OutlineDirectionsWalk } from './OutlineDirectionsWalk';
import { RoundDirectionsWalk } from './RoundDirectionsWalk';
import { SharpDirectionsWalk } from './SharpDirectionsWalk';
import { TwoToneDirectionsWalk } from './TwoToneDirectionsWalk';
export var DirectionsWalk =
/*#__PURE__*/
function DirectionsWalk(props) {
  return createThemedIcon(props, FilledDirectionsWalk, OutlineDirectionsWalk, RoundDirectionsWalk, SharpDirectionsWalk, TwoToneDirectionsWalk);
};