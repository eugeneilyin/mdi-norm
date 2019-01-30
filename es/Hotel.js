import { createThemedIcon } from './utils/createThemedIcon';
import { FilledHotel } from './FilledHotel';
import { OutlineHotel } from './OutlineHotel';
import { RoundHotel } from './RoundHotel';
import { SharpHotel } from './SharpHotel';
import { TwoToneHotel } from './TwoToneHotel';
export var Hotel =
/*#__PURE__*/
function Hotel(props) {
  return createThemedIcon(props, FilledHotel, OutlineHotel, RoundHotel, SharpHotel, TwoToneHotel);
};