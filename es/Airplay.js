import { createThemedIcon } from './utils/createThemedIcon';
import { FilledAirplay } from './FilledAirplay';
import { OutlineAirplay } from './OutlineAirplay';
import { RoundAirplay } from './RoundAirplay';
import { SharpAirplay } from './SharpAirplay';
import { TwoToneAirplay } from './TwoToneAirplay';
export var Airplay =
/*#__PURE__*/
function Airplay(props) {
  return createThemedIcon(props, FilledAirplay, OutlineAirplay, RoundAirplay, SharpAirplay, TwoToneAirplay);
};