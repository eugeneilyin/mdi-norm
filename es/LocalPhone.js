import { createThemedIcon } from './utils/createThemedIcon';
import { FilledLocalPhone } from './FilledLocalPhone';
import { OutlineLocalPhone } from './OutlineLocalPhone';
import { RoundLocalPhone } from './RoundLocalPhone';
import { SharpLocalPhone } from './SharpLocalPhone';
import { TwoToneLocalPhone } from './TwoToneLocalPhone';
export var LocalPhone =
/*#__PURE__*/
function LocalPhone(props) {
  return createThemedIcon(props, FilledLocalPhone, OutlineLocalPhone, RoundLocalPhone, SharpLocalPhone, TwoToneLocalPhone);
};