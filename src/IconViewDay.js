import { createThemedIcon } from './utils/createThemedIcon'
import { IconViewDayFilled } from './IconViewDayFilled'
import { IconViewDayOutlined } from './IconViewDayOutlined'
import { IconViewDayRounded } from './IconViewDayRounded'
import { IconViewDaySharp } from './IconViewDaySharp'
import { IconViewDayTwoTone } from './IconViewDayTwoTone'

export const IconViewDay = /*#__PURE__*/ props =>
  createThemedIcon(props, IconViewDayFilled, IconViewDayOutlined, IconViewDayRounded, IconViewDaySharp, IconViewDayTwoTone)
