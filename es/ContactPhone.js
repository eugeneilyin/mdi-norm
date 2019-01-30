import { createThemedIcon } from './utils/createThemedIcon';
import { FilledContactPhone } from './FilledContactPhone';
import { OutlineContactPhone } from './OutlineContactPhone';
import { RoundContactPhone } from './RoundContactPhone';
import { SharpContactPhone } from './SharpContactPhone';
import { TwoToneContactPhone } from './TwoToneContactPhone';
export var ContactPhone =
/*#__PURE__*/
function ContactPhone(props) {
  return createThemedIcon(props, FilledContactPhone, OutlineContactPhone, RoundContactPhone, SharpContactPhone, TwoToneContactPhone);
};