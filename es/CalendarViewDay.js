import { createThemedIcon } from './utils/createThemedIcon';
import { FilledCalendarViewDay } from './FilledCalendarViewDay';
import { OutlineCalendarViewDay } from './OutlineCalendarViewDay';
import { RoundCalendarViewDay } from './RoundCalendarViewDay';
import { SharpCalendarViewDay } from './SharpCalendarViewDay';
import { TwoToneCalendarViewDay } from './TwoToneCalendarViewDay';
export var CalendarViewDay =
/*#__PURE__*/
function CalendarViewDay(props) {
  return createThemedIcon(props, FilledCalendarViewDay, OutlineCalendarViewDay, RoundCalendarViewDay, SharpCalendarViewDay, TwoToneCalendarViewDay);
};