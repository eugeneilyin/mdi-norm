import { createThemedIcon } from './utils/createThemedIcon';
import { FilledTimerOff } from './FilledTimerOff';
import { OutlineTimerOff } from './OutlineTimerOff';
import { RoundTimerOff } from './RoundTimerOff';
import { SharpTimerOff } from './SharpTimerOff';
import { TwoToneTimerOff } from './TwoToneTimerOff';
export var TimerOff =
/*#__PURE__*/
function TimerOff(props) {
  return createThemedIcon(props, FilledTimerOff, OutlineTimerOff, RoundTimerOff, SharpTimerOff, TwoToneTimerOff);
};