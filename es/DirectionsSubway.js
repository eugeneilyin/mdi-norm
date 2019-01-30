import { createThemedIcon } from './utils/createThemedIcon';
import { FilledDirectionsSubway } from './FilledDirectionsSubway';
import { OutlineDirectionsSubway } from './OutlineDirectionsSubway';
import { RoundDirectionsSubway } from './RoundDirectionsSubway';
import { SharpDirectionsSubway } from './SharpDirectionsSubway';
import { TwoToneDirectionsSubway } from './TwoToneDirectionsSubway';
export var DirectionsSubway =
/*#__PURE__*/
function DirectionsSubway(props) {
  return createThemedIcon(props, FilledDirectionsSubway, OutlineDirectionsSubway, RoundDirectionsSubway, SharpDirectionsSubway, TwoToneDirectionsSubway);
};