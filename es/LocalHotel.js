import { createThemedIcon } from './utils/createThemedIcon';
import { FilledLocalHotel } from './FilledLocalHotel';
import { OutlineLocalHotel } from './OutlineLocalHotel';
import { RoundLocalHotel } from './RoundLocalHotel';
import { SharpLocalHotel } from './SharpLocalHotel';
import { TwoToneLocalHotel } from './TwoToneLocalHotel';
export var LocalHotel =
/*#__PURE__*/
function LocalHotel(props) {
  return createThemedIcon(props, FilledLocalHotel, OutlineLocalHotel, RoundLocalHotel, SharpLocalHotel, TwoToneLocalHotel);
};