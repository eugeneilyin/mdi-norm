import { createThemedIcon } from './utils/createThemedIcon';
import { FilledAlternateEmail } from './FilledAlternateEmail';
import { OutlineAlternateEmail } from './OutlineAlternateEmail';
import { RoundAlternateEmail } from './RoundAlternateEmail';
import { SharpAlternateEmail } from './SharpAlternateEmail';
import { TwoToneAlternateEmail } from './TwoToneAlternateEmail';
export var AlternateEmail =
/*#__PURE__*/
function AlternateEmail(props) {
  return createThemedIcon(props, FilledAlternateEmail, OutlineAlternateEmail, RoundAlternateEmail, SharpAlternateEmail, TwoToneAlternateEmail);
};