import { createThemedIcon } from './utils/createThemedIcon';
import { FilledLocalAirport } from './FilledLocalAirport';
import { OutlineLocalAirport } from './OutlineLocalAirport';
import { RoundLocalAirport } from './RoundLocalAirport';
import { SharpLocalAirport } from './SharpLocalAirport';
import { TwoToneLocalAirport } from './TwoToneLocalAirport';
export var LocalAirport =
/*#__PURE__*/
function LocalAirport(props) {
  return createThemedIcon(props, FilledLocalAirport, OutlineLocalAirport, RoundLocalAirport, SharpLocalAirport, TwoToneLocalAirport);
};