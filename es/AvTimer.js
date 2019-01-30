import { createThemedIcon } from './utils/createThemedIcon';
import { FilledAvTimer } from './FilledAvTimer';
import { OutlineAvTimer } from './OutlineAvTimer';
import { RoundAvTimer } from './RoundAvTimer';
import { SharpAvTimer } from './SharpAvTimer';
import { TwoToneAvTimer } from './TwoToneAvTimer';
export var AvTimer =
/*#__PURE__*/
function AvTimer(props) {
  return createThemedIcon(props, FilledAvTimer, OutlineAvTimer, RoundAvTimer, SharpAvTimer, TwoToneAvTimer);
};