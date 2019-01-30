import { createThemedIcon } from './utils/createThemedIcon'
import { FilledNextWeek } from './FilledNextWeek'
import { OutlineNextWeek } from './OutlineNextWeek'
import { RoundNextWeek } from './RoundNextWeek'
import { SharpNextWeek } from './SharpNextWeek'
import { TwoToneNextWeek } from './TwoToneNextWeek'

export const NextWeek = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledNextWeek, OutlineNextWeek, RoundNextWeek, SharpNextWeek, TwoToneNextWeek)
