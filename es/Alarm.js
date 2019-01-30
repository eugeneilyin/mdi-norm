import { createThemedIcon } from './utils/createThemedIcon';
import { FilledAlarm } from './FilledAlarm';
import { OutlineAlarm } from './OutlineAlarm';
import { RoundAlarm } from './RoundAlarm';
import { SharpAlarm } from './SharpAlarm';
import { TwoToneAlarm } from './TwoToneAlarm';
export var Alarm =
/*#__PURE__*/
function Alarm(props) {
  return createThemedIcon(props, FilledAlarm, OutlineAlarm, RoundAlarm, SharpAlarm, TwoToneAlarm);
};