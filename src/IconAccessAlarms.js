import { createThemedIcon } from './utils/createThemedIcon'
import { IconAccessAlarmsFilled } from './IconAccessAlarmsFilled'
import { IconAccessAlarmsOutlined } from './IconAccessAlarmsOutlined'
import { IconAccessAlarmsRounded } from './IconAccessAlarmsRounded'
import { IconAccessAlarmsSharp } from './IconAccessAlarmsSharp'
import { IconAccessAlarmsTwoTone } from './IconAccessAlarmsTwoTone'

export const IconAccessAlarms = /*#__PURE__*/ props =>
  createThemedIcon(props, IconAccessAlarmsFilled, IconAccessAlarmsOutlined, IconAccessAlarmsRounded, IconAccessAlarmsSharp, IconAccessAlarmsTwoTone)
