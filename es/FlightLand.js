import { createThemedIcon } from './utils/createThemedIcon';
import { FilledFlightLand } from './FilledFlightLand';
import { OutlineFlightLand } from './OutlineFlightLand';
import { RoundFlightLand } from './RoundFlightLand';
import { SharpFlightLand } from './SharpFlightLand';
import { TwoToneFlightLand } from './TwoToneFlightLand';
export var FlightLand =
/*#__PURE__*/
function FlightLand(props) {
  return createThemedIcon(props, FilledFlightLand, OutlineFlightLand, RoundFlightLand, SharpFlightLand, TwoToneFlightLand);
};