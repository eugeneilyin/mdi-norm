import { createThemedIcon } from './utils/createThemedIcon'
import { IconMenuFilled } from './IconMenuFilled'
import { IconMenuOutlined } from './IconMenuOutlined'
import { IconMenuRounded } from './IconMenuRounded'
import { IconMenuSharp } from './IconMenuSharp'
import { IconMenuTwoTone } from './IconMenuTwoTone'

export const IconMenu = /*#__PURE__*/ props =>
  createThemedIcon(props, IconMenuFilled, IconMenuOutlined, IconMenuRounded, IconMenuSharp, IconMenuTwoTone)
