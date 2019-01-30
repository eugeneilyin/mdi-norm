import { createThemedIcon } from './utils/createThemedIcon';
import { FilledReorder } from './FilledReorder';
import { OutlineReorder } from './OutlineReorder';
import { RoundReorder } from './RoundReorder';
import { SharpReorder } from './SharpReorder';
import { TwoToneReorder } from './TwoToneReorder';
export var Reorder =
/*#__PURE__*/
function Reorder(props) {
  return createThemedIcon(props, FilledReorder, OutlineReorder, RoundReorder, SharpReorder, TwoToneReorder);
};