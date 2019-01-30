import { createThemedIcon } from './utils/createThemedIcon';
import { FilledLocalAtm } from './FilledLocalAtm';
import { OutlineLocalAtm } from './OutlineLocalAtm';
import { RoundLocalAtm } from './RoundLocalAtm';
import { SharpLocalAtm } from './SharpLocalAtm';
import { TwoToneLocalAtm } from './TwoToneLocalAtm';
export var LocalAtm =
/*#__PURE__*/
function LocalAtm(props) {
  return createThemedIcon(props, FilledLocalAtm, OutlineLocalAtm, RoundLocalAtm, SharpLocalAtm, TwoToneLocalAtm);
};