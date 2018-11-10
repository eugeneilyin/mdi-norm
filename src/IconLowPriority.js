import { createThemedIcon } from './utils/createThemedIcon'
import { IconLowPriorityFilled } from './IconLowPriorityFilled'
import { IconLowPriorityOutlined } from './IconLowPriorityOutlined'
import { IconLowPriorityRounded } from './IconLowPriorityRounded'
import { IconLowPrioritySharp } from './IconLowPrioritySharp'
import { IconLowPriorityTwoTone } from './IconLowPriorityTwoTone'

export const IconLowPriority = /*#__PURE__*/ props =>
  createThemedIcon(props, IconLowPriorityFilled, IconLowPriorityOutlined, IconLowPriorityRounded, IconLowPrioritySharp, IconLowPriorityTwoTone)
