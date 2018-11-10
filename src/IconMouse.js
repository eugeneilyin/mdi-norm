import { createThemedIcon } from './utils/createThemedIcon'
import { IconMouseFilled } from './IconMouseFilled'
import { IconMouseOutlined } from './IconMouseOutlined'
import { IconMouseRounded } from './IconMouseRounded'
import { IconMouseSharp } from './IconMouseSharp'
import { IconMouseTwoTone } from './IconMouseTwoTone'

export const IconMouse = /*#__PURE__*/ props =>
  createThemedIcon(props, IconMouseFilled, IconMouseOutlined, IconMouseRounded, IconMouseSharp, IconMouseTwoTone)
