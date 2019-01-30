import { createThemedIcon } from './utils/createThemedIcon'
import { FilledAccessAlarm } from './FilledAccessAlarm'
import { OutlineAccessAlarm } from './OutlineAccessAlarm'
import { RoundAccessAlarm } from './RoundAccessAlarm'
import { SharpAccessAlarm } from './SharpAccessAlarm'
import { TwoToneAccessAlarm } from './TwoToneAccessAlarm'

export const AccessAlarm = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledAccessAlarm, OutlineAccessAlarm, RoundAccessAlarm, SharpAccessAlarm, TwoToneAccessAlarm)
