import { createThemedIcon } from './utils/createThemedIcon'
import { FilledAlarmOff } from './FilledAlarmOff'
import { OutlineAlarmOff } from './OutlineAlarmOff'
import { RoundAlarmOff } from './RoundAlarmOff'
import { SharpAlarmOff } from './SharpAlarmOff'
import { TwoToneAlarmOff } from './TwoToneAlarmOff'

export const AlarmOff = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledAlarmOff, OutlineAlarmOff, RoundAlarmOff, SharpAlarmOff, TwoToneAlarmOff)
