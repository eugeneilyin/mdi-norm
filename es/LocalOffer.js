import { createThemedIcon } from './utils/createThemedIcon';
import { FilledLocalOffer } from './FilledLocalOffer';
import { OutlineLocalOffer } from './OutlineLocalOffer';
import { RoundLocalOffer } from './RoundLocalOffer';
import { SharpLocalOffer } from './SharpLocalOffer';
import { TwoToneLocalOffer } from './TwoToneLocalOffer';
export var LocalOffer =
/*#__PURE__*/
function LocalOffer(props) {
  return createThemedIcon(props, FilledLocalOffer, OutlineLocalOffer, RoundLocalOffer, SharpLocalOffer, TwoToneLocalOffer);
};