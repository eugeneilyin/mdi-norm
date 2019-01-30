import { createThemedIcon } from './utils/createThemedIcon';
import { FilledPermContactCalendar } from './FilledPermContactCalendar';
import { OutlinePermContactCalendar } from './OutlinePermContactCalendar';
import { RoundPermContactCalendar } from './RoundPermContactCalendar';
import { SharpPermContactCalendar } from './SharpPermContactCalendar';
import { TwoTonePermContactCalendar } from './TwoTonePermContactCalendar';
export var PermContactCalendar =
/*#__PURE__*/
function PermContactCalendar(props) {
  return createThemedIcon(props, FilledPermContactCalendar, OutlinePermContactCalendar, RoundPermContactCalendar, SharpPermContactCalendar, TwoTonePermContactCalendar);
};