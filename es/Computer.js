import { createThemedIcon } from './utils/createThemedIcon';
import { FilledComputer } from './FilledComputer';
import { OutlineComputer } from './OutlineComputer';
import { RoundComputer } from './RoundComputer';
import { SharpComputer } from './SharpComputer';
import { TwoToneComputer } from './TwoToneComputer';
export var Computer =
/*#__PURE__*/
function Computer(props) {
  return createThemedIcon(props, FilledComputer, OutlineComputer, RoundComputer, SharpComputer, TwoToneComputer);
};