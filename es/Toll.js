import { createThemedIcon } from './utils/createThemedIcon';
import { FilledToll } from './FilledToll';
import { OutlineToll } from './OutlineToll';
import { RoundToll } from './RoundToll';
import { SharpToll } from './SharpToll';
import { TwoToneToll } from './TwoToneToll';
export var Toll =
/*#__PURE__*/
function Toll(props) {
  return createThemedIcon(props, FilledToll, OutlineToll, RoundToll, SharpToll, TwoToneToll);
};