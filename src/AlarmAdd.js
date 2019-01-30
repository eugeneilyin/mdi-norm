import { createThemedIcon } from './utils/createThemedIcon'
import { FilledAlarmAdd } from './FilledAlarmAdd'
import { OutlineAlarmAdd } from './OutlineAlarmAdd'
import { RoundAlarmAdd } from './RoundAlarmAdd'
import { SharpAlarmAdd } from './SharpAlarmAdd'
import { TwoToneAlarmAdd } from './TwoToneAlarmAdd'

export const AlarmAdd = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledAlarmAdd, OutlineAlarmAdd, RoundAlarmAdd, SharpAlarmAdd, TwoToneAlarmAdd)
