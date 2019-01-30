import { createThemedIcon } from './utils/createThemedIcon';
import { FilledLocalPharmacy } from './FilledLocalPharmacy';
import { OutlineLocalPharmacy } from './OutlineLocalPharmacy';
import { RoundLocalPharmacy } from './RoundLocalPharmacy';
import { SharpLocalPharmacy } from './SharpLocalPharmacy';
import { TwoToneLocalPharmacy } from './TwoToneLocalPharmacy';
export var LocalPharmacy =
/*#__PURE__*/
function LocalPharmacy(props) {
  return createThemedIcon(props, FilledLocalPharmacy, OutlineLocalPharmacy, RoundLocalPharmacy, SharpLocalPharmacy, TwoToneLocalPharmacy);
};