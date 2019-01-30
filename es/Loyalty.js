import { createThemedIcon } from './utils/createThemedIcon';
import { FilledLoyalty } from './FilledLoyalty';
import { OutlineLoyalty } from './OutlineLoyalty';
import { RoundLoyalty } from './RoundLoyalty';
import { SharpLoyalty } from './SharpLoyalty';
import { TwoToneLoyalty } from './TwoToneLoyalty';
export var Loyalty =
/*#__PURE__*/
function Loyalty(props) {
  return createThemedIcon(props, FilledLoyalty, OutlineLoyalty, RoundLoyalty, SharpLoyalty, TwoToneLoyalty);
};