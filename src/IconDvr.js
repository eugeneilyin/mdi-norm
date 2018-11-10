import { createThemedIcon } from './utils/createThemedIcon'
import { IconDvrFilled } from './IconDvrFilled'
import { IconDvrOutlined } from './IconDvrOutlined'
import { IconDvrRounded } from './IconDvrRounded'
import { IconDvrSharp } from './IconDvrSharp'
import { IconDvrTwoTone } from './IconDvrTwoTone'

export const IconDvr = /*#__PURE__*/ props =>
  createThemedIcon(props, IconDvrFilled, IconDvrOutlined, IconDvrRounded, IconDvrSharp, IconDvrTwoTone)
