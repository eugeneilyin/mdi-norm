import { createThemedIcon } from './utils/createThemedIcon';
import { FilledDirectionsTransit } from './FilledDirectionsTransit';
import { OutlineDirectionsTransit } from './OutlineDirectionsTransit';
import { RoundDirectionsTransit } from './RoundDirectionsTransit';
import { SharpDirectionsTransit } from './SharpDirectionsTransit';
import { TwoToneDirectionsTransit } from './TwoToneDirectionsTransit';
export var DirectionsTransit =
/*#__PURE__*/
function DirectionsTransit(props) {
  return createThemedIcon(props, FilledDirectionsTransit, OutlineDirectionsTransit, RoundDirectionsTransit, SharpDirectionsTransit, TwoToneDirectionsTransit);
};