import { createThemedIcon } from './utils/createThemedIcon';
import { FilledDelete } from './FilledDelete';
import { OutlineDelete } from './OutlineDelete';
import { RoundDelete } from './RoundDelete';
import { SharpDelete } from './SharpDelete';
import { TwoToneDelete } from './TwoToneDelete';
export var Delete =
/*#__PURE__*/
function Delete(props) {
  return createThemedIcon(props, FilledDelete, OutlineDelete, RoundDelete, SharpDelete, TwoToneDelete);
};