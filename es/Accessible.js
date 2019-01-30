import { createThemedIcon } from './utils/createThemedIcon';
import { FilledAccessible } from './FilledAccessible';
import { OutlineAccessible } from './OutlineAccessible';
import { RoundAccessible } from './RoundAccessible';
import { SharpAccessible } from './SharpAccessible';
import { TwoToneAccessible } from './TwoToneAccessible';
export var Accessible =
/*#__PURE__*/
function Accessible(props) {
  return createThemedIcon(props, FilledAccessible, OutlineAccessible, RoundAccessible, SharpAccessible, TwoToneAccessible);
};