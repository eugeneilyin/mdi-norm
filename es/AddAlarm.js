import { createThemedIcon } from './utils/createThemedIcon';
import { FilledAddAlarm } from './FilledAddAlarm';
import { OutlineAddAlarm } from './OutlineAddAlarm';
import { RoundAddAlarm } from './RoundAddAlarm';
import { SharpAddAlarm } from './SharpAddAlarm';
import { TwoToneAddAlarm } from './TwoToneAddAlarm';
export var AddAlarm =
/*#__PURE__*/
function AddAlarm(props) {
  return createThemedIcon(props, FilledAddAlarm, OutlineAddAlarm, RoundAddAlarm, SharpAddAlarm, TwoToneAddAlarm);
};