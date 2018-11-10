import { createThemedIcon } from './utils/createThemedIcon'
import { IconLoopFilled } from './IconLoopFilled'
import { IconLoopOutlined } from './IconLoopOutlined'
import { IconLoopRounded } from './IconLoopRounded'
import { IconLoopSharp } from './IconLoopSharp'
import { IconLoopTwoTone } from './IconLoopTwoTone'

export const IconLoop = /*#__PURE__*/ props =>
  createThemedIcon(props, IconLoopFilled, IconLoopOutlined, IconLoopRounded, IconLoopSharp, IconLoopTwoTone)
