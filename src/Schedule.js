import { createThemedIcon } from './utils/createThemedIcon'
import { FilledSchedule } from './FilledSchedule'
import { OutlineSchedule } from './OutlineSchedule'
import { RoundSchedule } from './RoundSchedule'
import { SharpSchedule } from './SharpSchedule'
import { TwoToneSchedule } from './TwoToneSchedule'

export const Schedule = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledSchedule, OutlineSchedule, RoundSchedule, SharpSchedule, TwoToneSchedule)
