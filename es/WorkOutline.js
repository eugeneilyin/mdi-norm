import { createThemedIcon } from './utils/createThemedIcon';
import { FilledWorkOutline } from './FilledWorkOutline';
import { OutlineWorkOutline } from './OutlineWorkOutline';
import { RoundWorkOutline } from './RoundWorkOutline';
import { SharpWorkOutline } from './SharpWorkOutline';
import { TwoToneWorkOutline } from './TwoToneWorkOutline';
export var WorkOutline =
/*#__PURE__*/
function WorkOutline(props) {
  return createThemedIcon(props, FilledWorkOutline, OutlineWorkOutline, RoundWorkOutline, SharpWorkOutline, TwoToneWorkOutline);
};