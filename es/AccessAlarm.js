import { createThemedIcon } from './utils/createThemedIcon';
import { FilledAccessAlarm } from './FilledAccessAlarm';
import { OutlineAccessAlarm } from './OutlineAccessAlarm';
import { RoundAccessAlarm } from './RoundAccessAlarm';
import { SharpAccessAlarm } from './SharpAccessAlarm';
import { TwoToneAccessAlarm } from './TwoToneAccessAlarm';
export var AccessAlarm =
/*#__PURE__*/
function AccessAlarm(props) {
  return createThemedIcon(props, FilledAccessAlarm, OutlineAccessAlarm, RoundAccessAlarm, SharpAccessAlarm, TwoToneAccessAlarm);
};