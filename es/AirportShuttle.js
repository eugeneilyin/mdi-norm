import { createThemedIcon } from './utils/createThemedIcon';
import { FilledAirportShuttle } from './FilledAirportShuttle';
import { OutlineAirportShuttle } from './OutlineAirportShuttle';
import { RoundAirportShuttle } from './RoundAirportShuttle';
import { SharpAirportShuttle } from './SharpAirportShuttle';
import { TwoToneAirportShuttle } from './TwoToneAirportShuttle';
export var AirportShuttle =
/*#__PURE__*/
function AirportShuttle(props) {
  return createThemedIcon(props, FilledAirportShuttle, OutlineAirportShuttle, RoundAirportShuttle, SharpAirportShuttle, TwoToneAirportShuttle);
};