import { createThemedIcon } from './utils/createThemedIcon'
import { IconHomeFilled } from './IconHomeFilled'
import { IconHomeOutlined } from './IconHomeOutlined'
import { IconHomeRounded } from './IconHomeRounded'
import { IconHomeSharp } from './IconHomeSharp'
import { IconHomeTwoTone } from './IconHomeTwoTone'

export const IconHome = /*#__PURE__*/ props =>
  createThemedIcon(props, IconHomeFilled, IconHomeOutlined, IconHomeRounded, IconHomeSharp, IconHomeTwoTone)
