import { createThemedIcon } from './utils/createThemedIcon';
import { FilledAlarmOn } from './FilledAlarmOn';
import { OutlineAlarmOn } from './OutlineAlarmOn';
import { RoundAlarmOn } from './RoundAlarmOn';
import { SharpAlarmOn } from './SharpAlarmOn';
import { TwoToneAlarmOn } from './TwoToneAlarmOn';
export var AlarmOn =
/*#__PURE__*/
function AlarmOn(props) {
  return createThemedIcon(props, FilledAlarmOn, OutlineAlarmOn, RoundAlarmOn, SharpAlarmOn, TwoToneAlarmOn);
};