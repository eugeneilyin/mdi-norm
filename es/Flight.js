import { createThemedIcon } from './utils/createThemedIcon';
import { FilledFlight } from './FilledFlight';
import { OutlineFlight } from './OutlineFlight';
import { RoundFlight } from './RoundFlight';
import { SharpFlight } from './SharpFlight';
import { TwoToneFlight } from './TwoToneFlight';
export var Flight =
/*#__PURE__*/
function Flight(props) {
  return createThemedIcon(props, FilledFlight, OutlineFlight, RoundFlight, SharpFlight, TwoToneFlight);
};