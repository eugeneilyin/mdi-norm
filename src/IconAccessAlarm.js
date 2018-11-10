import { createThemedIcon } from './utils/createThemedIcon'
import { IconAccessAlarmFilled } from './IconAccessAlarmFilled'
import { IconAccessAlarmOutlined } from './IconAccessAlarmOutlined'
import { IconAccessAlarmRounded } from './IconAccessAlarmRounded'
import { IconAccessAlarmSharp } from './IconAccessAlarmSharp'
import { IconAccessAlarmTwoTone } from './IconAccessAlarmTwoTone'

export const IconAccessAlarm = /*#__PURE__*/ props =>
  createThemedIcon(props, IconAccessAlarmFilled, IconAccessAlarmOutlined, IconAccessAlarmRounded, IconAccessAlarmSharp, IconAccessAlarmTwoTone)
