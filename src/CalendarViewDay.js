import { createThemedIcon } from './utils/createThemedIcon'
import { FilledCalendarViewDay } from './FilledCalendarViewDay'
import { OutlineCalendarViewDay } from './OutlineCalendarViewDay'
import { RoundCalendarViewDay } from './RoundCalendarViewDay'
import { SharpCalendarViewDay } from './SharpCalendarViewDay'
import { TwoToneCalendarViewDay } from './TwoToneCalendarViewDay'

export const CalendarViewDay = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledCalendarViewDay, OutlineCalendarViewDay, RoundCalendarViewDay, SharpCalendarViewDay, TwoToneCalendarViewDay)
