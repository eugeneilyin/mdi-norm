import { createThemedIcon } from './utils/createThemedIcon';
import { FilledAlarmAdd } from './FilledAlarmAdd';
import { OutlineAlarmAdd } from './OutlineAlarmAdd';
import { RoundAlarmAdd } from './RoundAlarmAdd';
import { SharpAlarmAdd } from './SharpAlarmAdd';
import { TwoToneAlarmAdd } from './TwoToneAlarmAdd';
export var AlarmAdd =
/*#__PURE__*/
function AlarmAdd(props) {
  return createThemedIcon(props, FilledAlarmAdd, OutlineAlarmAdd, RoundAlarmAdd, SharpAlarmAdd, TwoToneAlarmAdd);
};