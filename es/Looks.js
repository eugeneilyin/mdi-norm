import { createThemedIcon } from './utils/createThemedIcon';
import { FilledLooks } from './FilledLooks';
import { OutlineLooks } from './OutlineLooks';
import { RoundLooks } from './RoundLooks';
import { SharpLooks } from './SharpLooks';
import { TwoToneLooks } from './TwoToneLooks';
export var Looks =
/*#__PURE__*/
function Looks(props) {
  return createThemedIcon(props, FilledLooks, OutlineLooks, RoundLooks, SharpLooks, TwoToneLooks);
};