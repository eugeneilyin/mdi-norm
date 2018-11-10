import { createThemedIcon } from './utils/createThemedIcon'
import { IconWeekendFilled } from './IconWeekendFilled'
import { IconWeekendOutlined } from './IconWeekendOutlined'
import { IconWeekendRounded } from './IconWeekendRounded'
import { IconWeekendSharp } from './IconWeekendSharp'
import { IconWeekendTwoTone } from './IconWeekendTwoTone'

export const IconWeekend = /*#__PURE__*/ props =>
  createThemedIcon(props, IconWeekendFilled, IconWeekendOutlined, IconWeekendRounded, IconWeekendSharp, IconWeekendTwoTone)
