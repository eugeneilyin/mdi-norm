import { createThemedIcon } from './utils/createThemedIcon';
import { FilledTripOrigin } from './FilledTripOrigin';
import { OutlineTripOrigin } from './OutlineTripOrigin';
import { RoundTripOrigin } from './RoundTripOrigin';
import { SharpTripOrigin } from './SharpTripOrigin';
import { TwoToneTripOrigin } from './TwoToneTripOrigin';
export var TripOrigin =
/*#__PURE__*/
function TripOrigin(props) {
  return createThemedIcon(props, FilledTripOrigin, OutlineTripOrigin, RoundTripOrigin, SharpTripOrigin, TwoToneTripOrigin);
};