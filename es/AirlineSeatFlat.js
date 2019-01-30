import { createThemedIcon } from './utils/createThemedIcon';
import { FilledAirlineSeatFlat } from './FilledAirlineSeatFlat';
import { OutlineAirlineSeatFlat } from './OutlineAirlineSeatFlat';
import { RoundAirlineSeatFlat } from './RoundAirlineSeatFlat';
import { SharpAirlineSeatFlat } from './SharpAirlineSeatFlat';
import { TwoToneAirlineSeatFlat } from './TwoToneAirlineSeatFlat';
export var AirlineSeatFlat =
/*#__PURE__*/
function AirlineSeatFlat(props) {
  return createThemedIcon(props, FilledAirlineSeatFlat, OutlineAirlineSeatFlat, RoundAirlineSeatFlat, SharpAirlineSeatFlat, TwoToneAirlineSeatFlat);
};