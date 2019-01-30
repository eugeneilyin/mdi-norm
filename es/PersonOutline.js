import { createThemedIcon } from './utils/createThemedIcon';
import { FilledPersonOutline } from './FilledPersonOutline';
import { OutlinePersonOutline } from './OutlinePersonOutline';
import { RoundPersonOutline } from './RoundPersonOutline';
import { SharpPersonOutline } from './SharpPersonOutline';
import { TwoTonePersonOutline } from './TwoTonePersonOutline';
export var PersonOutline =
/*#__PURE__*/
function PersonOutline(props) {
  return createThemedIcon(props, FilledPersonOutline, OutlinePersonOutline, RoundPersonOutline, SharpPersonOutline, TwoTonePersonOutline);
};