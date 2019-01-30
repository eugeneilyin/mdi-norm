import { createThemedIcon } from './utils/createThemedIcon';
import { FilledPersonAdd } from './FilledPersonAdd';
import { OutlinePersonAdd } from './OutlinePersonAdd';
import { RoundPersonAdd } from './RoundPersonAdd';
import { SharpPersonAdd } from './SharpPersonAdd';
import { TwoTonePersonAdd } from './TwoTonePersonAdd';
export var PersonAdd =
/*#__PURE__*/
function PersonAdd(props) {
  return createThemedIcon(props, FilledPersonAdd, OutlinePersonAdd, RoundPersonAdd, SharpPersonAdd, TwoTonePersonAdd);
};