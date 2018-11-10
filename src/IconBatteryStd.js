import { createThemedIcon } from './utils/createThemedIcon'
import { IconBatteryStdFilled } from './IconBatteryStdFilled'
import { IconBatteryStdOutlined } from './IconBatteryStdOutlined'
import { IconBatteryStdRounded } from './IconBatteryStdRounded'
import { IconBatteryStdSharp } from './IconBatteryStdSharp'
import { IconBatteryStdTwoTone } from './IconBatteryStdTwoTone'

export const IconBatteryStd = /*#__PURE__*/ props =>
  createThemedIcon(props, IconBatteryStdFilled, IconBatteryStdOutlined, IconBatteryStdRounded, IconBatteryStdSharp, IconBatteryStdTwoTone)
