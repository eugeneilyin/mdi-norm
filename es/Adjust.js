import { createThemedIcon } from './utils/createThemedIcon';
import { FilledAdjust } from './FilledAdjust';
import { OutlineAdjust } from './OutlineAdjust';
import { RoundAdjust } from './RoundAdjust';
import { SharpAdjust } from './SharpAdjust';
import { TwoToneAdjust } from './TwoToneAdjust';
export var Adjust =
/*#__PURE__*/
function Adjust(props) {
  return createThemedIcon(props, FilledAdjust, OutlineAdjust, RoundAdjust, SharpAdjust, TwoToneAdjust);
};