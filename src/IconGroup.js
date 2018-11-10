import { createThemedIcon } from './utils/createThemedIcon'
import { IconGroupFilled } from './IconGroupFilled'
import { IconGroupOutlined } from './IconGroupOutlined'
import { IconGroupRounded } from './IconGroupRounded'
import { IconGroupSharp } from './IconGroupSharp'
import { IconGroupTwoTone } from './IconGroupTwoTone'

export const IconGroup = /*#__PURE__*/ props =>
  createThemedIcon(props, IconGroupFilled, IconGroupOutlined, IconGroupRounded, IconGroupSharp, IconGroupTwoTone)
