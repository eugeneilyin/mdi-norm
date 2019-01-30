import { createThemedIcon } from './utils/createThemedIcon';
import { FilledEmail } from './FilledEmail';
import { OutlineEmail } from './OutlineEmail';
import { RoundEmail } from './RoundEmail';
import { SharpEmail } from './SharpEmail';
import { TwoToneEmail } from './TwoToneEmail';
export var Email =
/*#__PURE__*/
function Email(props) {
  return createThemedIcon(props, FilledEmail, OutlineEmail, RoundEmail, SharpEmail, TwoToneEmail);
};