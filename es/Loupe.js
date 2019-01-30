import { createThemedIcon } from './utils/createThemedIcon';
import { FilledLoupe } from './FilledLoupe';
import { OutlineLoupe } from './OutlineLoupe';
import { RoundLoupe } from './RoundLoupe';
import { SharpLoupe } from './SharpLoupe';
import { TwoToneLoupe } from './TwoToneLoupe';
export var Loupe =
/*#__PURE__*/
function Loupe(props) {
  return createThemedIcon(props, FilledLoupe, OutlineLoupe, RoundLoupe, SharpLoupe, TwoToneLoupe);
};