import { createThemedIcon } from './utils/createThemedIcon';
import { FilledCalendarToday } from './FilledCalendarToday';
import { OutlineCalendarToday } from './OutlineCalendarToday';
import { RoundCalendarToday } from './RoundCalendarToday';
import { SharpCalendarToday } from './SharpCalendarToday';
import { TwoToneCalendarToday } from './TwoToneCalendarToday';
export var CalendarToday =
/*#__PURE__*/
function CalendarToday(props) {
  return createThemedIcon(props, FilledCalendarToday, OutlineCalendarToday, RoundCalendarToday, SharpCalendarToday, TwoToneCalendarToday);
};