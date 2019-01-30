import { createThemedIcon } from './utils/createThemedIcon';
import { FilledDone } from './FilledDone';
import { OutlineDone } from './OutlineDone';
import { RoundDone } from './RoundDone';
import { SharpDone } from './SharpDone';
import { TwoToneDone } from './TwoToneDone';
export var Done =
/*#__PURE__*/
function Done(props) {
  return createThemedIcon(props, FilledDone, OutlineDone, RoundDone, SharpDone, TwoToneDone);
};