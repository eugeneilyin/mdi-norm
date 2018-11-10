import { createThemedIcon } from './utils/createThemedIcon'
import { IconAddAlarmFilled } from './IconAddAlarmFilled'
import { IconAddAlarmOutlined } from './IconAddAlarmOutlined'
import { IconAddAlarmRounded } from './IconAddAlarmRounded'
import { IconAddAlarmSharp } from './IconAddAlarmSharp'
import { IconAddAlarmTwoTone } from './IconAddAlarmTwoTone'

export const IconAddAlarm = /*#__PURE__*/ props =>
  createThemedIcon(props, IconAddAlarmFilled, IconAddAlarmOutlined, IconAddAlarmRounded, IconAddAlarmSharp, IconAddAlarmTwoTone)
