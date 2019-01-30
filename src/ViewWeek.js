import { createThemedIcon } from './utils/createThemedIcon'
import { FilledViewWeek } from './FilledViewWeek'
import { OutlineViewWeek } from './OutlineViewWeek'
import { RoundViewWeek } from './RoundViewWeek'
import { SharpViewWeek } from './SharpViewWeek'
import { TwoToneViewWeek } from './TwoToneViewWeek'

export const ViewWeek = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledViewWeek, OutlineViewWeek, RoundViewWeek, SharpViewWeek, TwoToneViewWeek)
