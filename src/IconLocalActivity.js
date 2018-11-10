import { createThemedIcon } from './utils/createThemedIcon'
import { IconLocalActivityFilled } from './IconLocalActivityFilled'
import { IconLocalActivityOutlined } from './IconLocalActivityOutlined'
import { IconLocalActivityRounded } from './IconLocalActivityRounded'
import { IconLocalActivitySharp } from './IconLocalActivitySharp'
import { IconLocalActivityTwoTone } from './IconLocalActivityTwoTone'

export const IconLocalActivity = /*#__PURE__*/ props =>
  createThemedIcon(props, IconLocalActivityFilled, IconLocalActivityOutlined, IconLocalActivityRounded, IconLocalActivitySharp, IconLocalActivityTwoTone)
