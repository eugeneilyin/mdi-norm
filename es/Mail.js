import { createThemedIcon } from './utils/createThemedIcon';
import { FilledMail } from './FilledMail';
import { OutlineMail } from './OutlineMail';
import { RoundMail } from './RoundMail';
import { SharpMail } from './SharpMail';
import { TwoToneMail } from './TwoToneMail';
export var Mail =
/*#__PURE__*/
function Mail(props) {
  return createThemedIcon(props, FilledMail, OutlineMail, RoundMail, SharpMail, TwoToneMail);
};