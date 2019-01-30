import { createThemedIcon } from './utils/createThemedIcon';
import { FilledCheck } from './FilledCheck';
import { OutlineCheck } from './OutlineCheck';
import { RoundCheck } from './RoundCheck';
import { SharpCheck } from './SharpCheck';
import { TwoToneCheck } from './TwoToneCheck';
export var Check =
/*#__PURE__*/
function Check(props) {
  return createThemedIcon(props, FilledCheck, OutlineCheck, RoundCheck, SharpCheck, TwoToneCheck);
};