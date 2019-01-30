import { createThemedIcon } from './utils/createThemedIcon';
import { FilledListAlt } from './FilledListAlt';
import { OutlineListAlt } from './OutlineListAlt';
import { RoundListAlt } from './RoundListAlt';
import { SharpListAlt } from './SharpListAlt';
import { TwoToneListAlt } from './TwoToneListAlt';
export var ListAlt =
/*#__PURE__*/
function ListAlt(props) {
  return createThemedIcon(props, FilledListAlt, OutlineListAlt, RoundListAlt, SharpListAlt, TwoToneListAlt);
};