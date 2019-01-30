import { createThemedIcon } from './utils/createThemedIcon'
import { FilledPermContactCalendar } from './FilledPermContactCalendar'
import { OutlinePermContactCalendar } from './OutlinePermContactCalendar'
import { RoundPermContactCalendar } from './RoundPermContactCalendar'
import { SharpPermContactCalendar } from './SharpPermContactCalendar'
import { TwoTonePermContactCalendar } from './TwoTonePermContactCalendar'

export const PermContactCalendar = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledPermContactCalendar, OutlinePermContactCalendar, RoundPermContactCalendar, SharpPermContactCalendar, TwoTonePermContactCalendar)
