import { createThemedIcon } from './utils/createThemedIcon'
import { IconViewWeekFilled } from './IconViewWeekFilled'
import { IconViewWeekOutlined } from './IconViewWeekOutlined'
import { IconViewWeekRounded } from './IconViewWeekRounded'
import { IconViewWeekSharp } from './IconViewWeekSharp'
import { IconViewWeekTwoTone } from './IconViewWeekTwoTone'

export const IconViewWeek = /*#__PURE__*/ props =>
  createThemedIcon(props, IconViewWeekFilled, IconViewWeekOutlined, IconViewWeekRounded, IconViewWeekSharp, IconViewWeekTwoTone)
