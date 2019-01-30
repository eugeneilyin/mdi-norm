import { createThemedIcon } from './utils/createThemedIcon';
import { FilledNoSim } from './FilledNoSim';
import { OutlineNoSim } from './OutlineNoSim';
import { RoundNoSim } from './RoundNoSim';
import { SharpNoSim } from './SharpNoSim';
import { TwoToneNoSim } from './TwoToneNoSim';
export var NoSim =
/*#__PURE__*/
function NoSim(props) {
  return createThemedIcon(props, FilledNoSim, OutlineNoSim, RoundNoSim, SharpNoSim, TwoToneNoSim);
};