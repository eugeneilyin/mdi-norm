import { createThemedIcon } from './utils/createThemedIcon';
import { FilledDirectionsRailway } from './FilledDirectionsRailway';
import { OutlineDirectionsRailway } from './OutlineDirectionsRailway';
import { RoundDirectionsRailway } from './RoundDirectionsRailway';
import { SharpDirectionsRailway } from './SharpDirectionsRailway';
import { TwoToneDirectionsRailway } from './TwoToneDirectionsRailway';
export var DirectionsRailway =
/*#__PURE__*/
function DirectionsRailway(props) {
  return createThemedIcon(props, FilledDirectionsRailway, OutlineDirectionsRailway, RoundDirectionsRailway, SharpDirectionsRailway, TwoToneDirectionsRailway);
};