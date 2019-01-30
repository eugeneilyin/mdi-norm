import { createThemedIcon } from './utils/createThemedIcon';
import { FilledStreetview } from './FilledStreetview';
import { OutlineStreetview } from './OutlineStreetview';
import { RoundStreetview } from './RoundStreetview';
import { SharpStreetview } from './SharpStreetview';
import { TwoToneStreetview } from './TwoToneStreetview';
export var Streetview =
/*#__PURE__*/
function Streetview(props) {
  return createThemedIcon(props, FilledStreetview, OutlineStreetview, RoundStreetview, SharpStreetview, TwoToneStreetview);
};