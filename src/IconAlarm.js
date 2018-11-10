import { createThemedIcon } from './utils/createThemedIcon'
import { IconAlarmFilled } from './IconAlarmFilled'
import { IconAlarmOutlined } from './IconAlarmOutlined'
import { IconAlarmRounded } from './IconAlarmRounded'
import { IconAlarmSharp } from './IconAlarmSharp'
import { IconAlarmTwoTone } from './IconAlarmTwoTone'

export const IconAlarm = /*#__PURE__*/ props =>
  createThemedIcon(props, IconAlarmFilled, IconAlarmOutlined, IconAlarmRounded, IconAlarmSharp, IconAlarmTwoTone)
