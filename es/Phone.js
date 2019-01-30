import { createThemedIcon } from './utils/createThemedIcon';
import { FilledPhone } from './FilledPhone';
import { OutlinePhone } from './OutlinePhone';
import { RoundPhone } from './RoundPhone';
import { SharpPhone } from './SharpPhone';
import { TwoTonePhone } from './TwoTonePhone';
export var Phone =
/*#__PURE__*/
function Phone(props) {
  return createThemedIcon(props, FilledPhone, OutlinePhone, RoundPhone, SharpPhone, TwoTonePhone);
};