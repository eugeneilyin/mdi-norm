import { createThemedIcon } from './utils/createThemedIcon'
import { IconNavigationFilled } from './IconNavigationFilled'
import { IconNavigationOutlined } from './IconNavigationOutlined'
import { IconNavigationRounded } from './IconNavigationRounded'
import { IconNavigationSharp } from './IconNavigationSharp'
import { IconNavigationTwoTone } from './IconNavigationTwoTone'

export const IconNavigation = /*#__PURE__*/ props =>
  createThemedIcon(props, IconNavigationFilled, IconNavigationOutlined, IconNavigationRounded, IconNavigationSharp, IconNavigationTwoTone)
