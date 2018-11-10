import { createThemedIcon } from './utils/createThemedIcon'
import { IconMaximizeFilled } from './IconMaximizeFilled'
import { IconMaximizeOutlined } from './IconMaximizeOutlined'
import { IconMaximizeRounded } from './IconMaximizeRounded'
import { IconMaximizeSharp } from './IconMaximizeSharp'
import { IconMaximizeTwoTone } from './IconMaximizeTwoTone'

export const IconMaximize = /*#__PURE__*/ props =>
  createThemedIcon(props, IconMaximizeFilled, IconMaximizeOutlined, IconMaximizeRounded, IconMaximizeSharp, IconMaximizeTwoTone)
