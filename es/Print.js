import { createThemedIcon } from './utils/createThemedIcon';
import { FilledPrint } from './FilledPrint';
import { OutlinePrint } from './OutlinePrint';
import { RoundPrint } from './RoundPrint';
import { SharpPrint } from './SharpPrint';
import { TwoTonePrint } from './TwoTonePrint';
export var Print =
/*#__PURE__*/
function Print(props) {
  return createThemedIcon(props, FilledPrint, OutlinePrint, RoundPrint, SharpPrint, TwoTonePrint);
};