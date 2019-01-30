import { createThemedIcon } from './utils/createThemedIcon';
import { FilledDeleteOutline } from './FilledDeleteOutline';
import { OutlineDeleteOutline } from './OutlineDeleteOutline';
import { RoundDeleteOutline } from './RoundDeleteOutline';
import { SharpDeleteOutline } from './SharpDeleteOutline';
import { TwoToneDeleteOutline } from './TwoToneDeleteOutline';
export var DeleteOutline =
/*#__PURE__*/
function DeleteOutline(props) {
  return createThemedIcon(props, FilledDeleteOutline, OutlineDeleteOutline, RoundDeleteOutline, SharpDeleteOutline, TwoToneDeleteOutline);
};