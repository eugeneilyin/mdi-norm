import { createThemedIcon } from './utils/createThemedIcon';
import { FilledEdit } from './FilledEdit';
import { OutlineEdit } from './OutlineEdit';
import { RoundEdit } from './RoundEdit';
import { SharpEdit } from './SharpEdit';
import { TwoToneEdit } from './TwoToneEdit';
export var Edit =
/*#__PURE__*/
function Edit(props) {
  return createThemedIcon(props, FilledEdit, OutlineEdit, RoundEdit, SharpEdit, TwoToneEdit);
};