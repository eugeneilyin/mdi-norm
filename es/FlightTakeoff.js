import { createThemedIcon } from './utils/createThemedIcon';
import { FilledFlightTakeoff } from './FilledFlightTakeoff';
import { OutlineFlightTakeoff } from './OutlineFlightTakeoff';
import { RoundFlightTakeoff } from './RoundFlightTakeoff';
import { SharpFlightTakeoff } from './SharpFlightTakeoff';
import { TwoToneFlightTakeoff } from './TwoToneFlightTakeoff';
export var FlightTakeoff =
/*#__PURE__*/
function FlightTakeoff(props) {
  return createThemedIcon(props, FilledFlightTakeoff, OutlineFlightTakeoff, RoundFlightTakeoff, SharpFlightTakeoff, TwoToneFlightTakeoff);
};