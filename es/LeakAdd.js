import { createThemedIcon } from './utils/createThemedIcon';
import { FilledLeakAdd } from './FilledLeakAdd';
import { OutlineLeakAdd } from './OutlineLeakAdd';
import { RoundLeakAdd } from './RoundLeakAdd';
import { SharpLeakAdd } from './SharpLeakAdd';
import { TwoToneLeakAdd } from './TwoToneLeakAdd';
export var LeakAdd =
/*#__PURE__*/
function LeakAdd(props) {
  return createThemedIcon(props, FilledLeakAdd, OutlineLeakAdd, RoundLeakAdd, SharpLeakAdd, TwoToneLeakAdd);
};