import { createThemedIcon } from './utils/createThemedIcon';
import { FilledSort } from './FilledSort';
import { OutlineSort } from './OutlineSort';
import { RoundSort } from './RoundSort';
import { SharpSort } from './SharpSort';
import { TwoToneSort } from './TwoToneSort';
export var Sort =
/*#__PURE__*/
function Sort(props) {
  return createThemedIcon(props, FilledSort, OutlineSort, RoundSort, SharpSort, TwoToneSort);
};