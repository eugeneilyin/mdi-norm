import { createThemedIcon } from './utils/createThemedIcon'
import { FilledAlarmOn } from './FilledAlarmOn'
import { OutlineAlarmOn } from './OutlineAlarmOn'
import { RoundAlarmOn } from './RoundAlarmOn'
import { SharpAlarmOn } from './SharpAlarmOn'
import { TwoToneAlarmOn } from './TwoToneAlarmOn'

export const AlarmOn = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledAlarmOn, OutlineAlarmOn, RoundAlarmOn, SharpAlarmOn, TwoToneAlarmOn)
