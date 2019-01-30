import { createThemedIcon } from './utils/createThemedIcon';
import { FilledSelectAll } from './FilledSelectAll';
import { OutlineSelectAll } from './OutlineSelectAll';
import { RoundSelectAll } from './RoundSelectAll';
import { SharpSelectAll } from './SharpSelectAll';
import { TwoToneSelectAll } from './TwoToneSelectAll';
export var SelectAll =
/*#__PURE__*/
function SelectAll(props) {
  return createThemedIcon(props, FilledSelectAll, OutlineSelectAll, RoundSelectAll, SharpSelectAll, TwoToneSelectAll);
};