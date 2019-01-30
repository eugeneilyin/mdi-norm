import { createThemedIcon } from './utils/createThemedIcon';
import { FilledSnooze } from './FilledSnooze';
import { OutlineSnooze } from './OutlineSnooze';
import { RoundSnooze } from './RoundSnooze';
import { SharpSnooze } from './SharpSnooze';
import { TwoToneSnooze } from './TwoToneSnooze';
export var Snooze =
/*#__PURE__*/
function Snooze(props) {
  return createThemedIcon(props, FilledSnooze, OutlineSnooze, RoundSnooze, SharpSnooze, TwoToneSnooze);
};