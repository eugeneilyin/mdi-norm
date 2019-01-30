import { createThemedIcon } from './utils/createThemedIcon';
import { FilledSchedule } from './FilledSchedule';
import { OutlineSchedule } from './OutlineSchedule';
import { RoundSchedule } from './RoundSchedule';
import { SharpSchedule } from './SharpSchedule';
import { TwoToneSchedule } from './TwoToneSchedule';
export var Schedule =
/*#__PURE__*/
function Schedule(props) {
  return createThemedIcon(props, FilledSchedule, OutlineSchedule, RoundSchedule, SharpSchedule, TwoToneSchedule);
};