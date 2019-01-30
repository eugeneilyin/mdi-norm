import { createThemedIcon } from './utils/createThemedIcon';
import { FilledStraighten } from './FilledStraighten';
import { OutlineStraighten } from './OutlineStraighten';
import { RoundStraighten } from './RoundStraighten';
import { SharpStraighten } from './SharpStraighten';
import { TwoToneStraighten } from './TwoToneStraighten';
export var Straighten =
/*#__PURE__*/
function Straighten(props) {
  return createThemedIcon(props, FilledStraighten, OutlineStraighten, RoundStraighten, SharpStraighten, TwoToneStraighten);
};