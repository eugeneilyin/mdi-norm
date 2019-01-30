import { createThemedIcon } from './utils/createThemedIcon';
import { FilledRemove } from './FilledRemove';
import { OutlineRemove } from './OutlineRemove';
import { RoundRemove } from './RoundRemove';
import { SharpRemove } from './SharpRemove';
import { TwoToneRemove } from './TwoToneRemove';
export var Remove =
/*#__PURE__*/
function Remove(props) {
  return createThemedIcon(props, FilledRemove, OutlineRemove, RoundRemove, SharpRemove, TwoToneRemove);
};