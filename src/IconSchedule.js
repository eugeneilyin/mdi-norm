import { createThemedIcon } from './utils/createThemedIcon'
import { IconScheduleFilled } from './IconScheduleFilled'
import { IconScheduleOutlined } from './IconScheduleOutlined'
import { IconScheduleRounded } from './IconScheduleRounded'
import { IconScheduleSharp } from './IconScheduleSharp'
import { IconScheduleTwoTone } from './IconScheduleTwoTone'

export const IconSchedule = /*#__PURE__*/ props =>
  createThemedIcon(props, IconScheduleFilled, IconScheduleOutlined, IconScheduleRounded, IconScheduleSharp, IconScheduleTwoTone)
