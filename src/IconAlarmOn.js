import { createThemedIcon } from './utils/createThemedIcon'
import { IconAlarmOnFilled } from './IconAlarmOnFilled'
import { IconAlarmOnOutlined } from './IconAlarmOnOutlined'
import { IconAlarmOnRounded } from './IconAlarmOnRounded'
import { IconAlarmOnSharp } from './IconAlarmOnSharp'
import { IconAlarmOnTwoTone } from './IconAlarmOnTwoTone'

export const IconAlarmOn = /*#__PURE__*/ props =>
  createThemedIcon(props, IconAlarmOnFilled, IconAlarmOnOutlined, IconAlarmOnRounded, IconAlarmOnSharp, IconAlarmOnTwoTone)
