import { createThemedIcon } from './utils/createThemedIcon';
import { FilledColorize } from './FilledColorize';
import { OutlineColorize } from './OutlineColorize';
import { RoundColorize } from './RoundColorize';
import { SharpColorize } from './SharpColorize';
import { TwoToneColorize } from './TwoToneColorize';
export var Colorize =
/*#__PURE__*/
function Colorize(props) {
  return createThemedIcon(props, FilledColorize, OutlineColorize, RoundColorize, SharpColorize, TwoToneColorize);
};