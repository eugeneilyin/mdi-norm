import { createThemedIcon } from './utils/createThemedIcon'
import { IconBatteryFullFilled } from './IconBatteryFullFilled'
import { IconBatteryFullOutlined } from './IconBatteryFullOutlined'
import { IconBatteryFullRounded } from './IconBatteryFullRounded'
import { IconBatteryFullSharp } from './IconBatteryFullSharp'
import { IconBatteryFullTwoTone } from './IconBatteryFullTwoTone'

export const IconBatteryFull = /*#__PURE__*/ props =>
  createThemedIcon(props, IconBatteryFullFilled, IconBatteryFullOutlined, IconBatteryFullRounded, IconBatteryFullSharp, IconBatteryFullTwoTone)
