import { createThemedIcon } from './utils/createThemedIcon'
import { IconMinimizeFilled } from './IconMinimizeFilled'
import { IconMinimizeOutlined } from './IconMinimizeOutlined'
import { IconMinimizeRounded } from './IconMinimizeRounded'
import { IconMinimizeSharp } from './IconMinimizeSharp'
import { IconMinimizeTwoTone } from './IconMinimizeTwoTone'

export const IconMinimize = /*#__PURE__*/ props =>
  createThemedIcon(props, IconMinimizeFilled, IconMinimizeOutlined, IconMinimizeRounded, IconMinimizeSharp, IconMinimizeTwoTone)
