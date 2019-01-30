import { createThemedIcon } from './utils/createThemedIcon';
import { FilledRepeat } from './FilledRepeat';
import { OutlineRepeat } from './OutlineRepeat';
import { RoundRepeat } from './RoundRepeat';
import { SharpRepeat } from './SharpRepeat';
import { TwoToneRepeat } from './TwoToneRepeat';
export var Repeat =
/*#__PURE__*/
function Repeat(props) {
  return createThemedIcon(props, FilledRepeat, OutlineRepeat, RoundRepeat, SharpRepeat, TwoToneRepeat);
};