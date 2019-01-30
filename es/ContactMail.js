import { createThemedIcon } from './utils/createThemedIcon';
import { FilledContactMail } from './FilledContactMail';
import { OutlineContactMail } from './OutlineContactMail';
import { RoundContactMail } from './RoundContactMail';
import { SharpContactMail } from './SharpContactMail';
import { TwoToneContactMail } from './TwoToneContactMail';
export var ContactMail =
/*#__PURE__*/
function ContactMail(props) {
  return createThemedIcon(props, FilledContactMail, OutlineContactMail, RoundContactMail, SharpContactMail, TwoToneContactMail);
};