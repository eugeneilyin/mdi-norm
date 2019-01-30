import { createThemedIcon } from './utils/createThemedIcon';
import { FilledLeakRemove } from './FilledLeakRemove';
import { OutlineLeakRemove } from './OutlineLeakRemove';
import { RoundLeakRemove } from './RoundLeakRemove';
import { SharpLeakRemove } from './SharpLeakRemove';
import { TwoToneLeakRemove } from './TwoToneLeakRemove';
export var LeakRemove =
/*#__PURE__*/
function LeakRemove(props) {
  return createThemedIcon(props, FilledLeakRemove, OutlineLeakRemove, RoundLeakRemove, SharpLeakRemove, TwoToneLeakRemove);
};