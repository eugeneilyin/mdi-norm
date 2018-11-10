import { createThemedIcon } from './utils/createThemedIcon'
import { IconTabFilled } from './IconTabFilled'
import { IconTabOutlined } from './IconTabOutlined'
import { IconTabRounded } from './IconTabRounded'
import { IconTabSharp } from './IconTabSharp'
import { IconTabTwoTone } from './IconTabTwoTone'

export const IconTab = /*#__PURE__*/ props =>
  createThemedIcon(props, IconTabFilled, IconTabOutlined, IconTabRounded, IconTabSharp, IconTabTwoTone)
