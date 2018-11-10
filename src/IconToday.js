import { createThemedIcon } from './utils/createThemedIcon'
import { IconTodayFilled } from './IconTodayFilled'
import { IconTodayOutlined } from './IconTodayOutlined'
import { IconTodayRounded } from './IconTodayRounded'
import { IconTodaySharp } from './IconTodaySharp'
import { IconTodayTwoTone } from './IconTodayTwoTone'

export const IconToday = /*#__PURE__*/ props =>
  createThemedIcon(props, IconTodayFilled, IconTodayOutlined, IconTodayRounded, IconTodaySharp, IconTodayTwoTone)
