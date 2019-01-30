import { createThemedIcon } from './utils/createThemedIcon';
import { FilledMailOutline } from './FilledMailOutline';
import { OutlineMailOutline } from './OutlineMailOutline';
import { RoundMailOutline } from './RoundMailOutline';
import { SharpMailOutline } from './SharpMailOutline';
import { TwoToneMailOutline } from './TwoToneMailOutline';
export var MailOutline =
/*#__PURE__*/
function MailOutline(props) {
  return createThemedIcon(props, FilledMailOutline, OutlineMailOutline, RoundMailOutline, SharpMailOutline, TwoToneMailOutline);
};