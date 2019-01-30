import { createThemedIcon } from './utils/createThemedIcon';
import { FilledRoundedCorner } from './FilledRoundedCorner';
import { OutlineRoundedCorner } from './OutlineRoundedCorner';
import { RoundRoundedCorner } from './RoundRoundedCorner';
import { SharpRoundedCorner } from './SharpRoundedCorner';
import { TwoToneRoundedCorner } from './TwoToneRoundedCorner';
export var RoundedCorner =
/*#__PURE__*/
function RoundedCorner(props) {
  return createThemedIcon(props, FilledRoundedCorner, OutlineRoundedCorner, RoundRoundedCorner, SharpRoundedCorner, TwoToneRoundedCorner);
};