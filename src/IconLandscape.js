import { createThemedIcon } from './utils/createThemedIcon'
import { IconLandscapeFilled } from './IconLandscapeFilled'
import { IconLandscapeOutlined } from './IconLandscapeOutlined'
import { IconLandscapeRounded } from './IconLandscapeRounded'
import { IconLandscapeSharp } from './IconLandscapeSharp'
import { IconLandscapeTwoTone } from './IconLandscapeTwoTone'

export const IconLandscape = /*#__PURE__*/ props =>
  createThemedIcon(props, IconLandscapeFilled, IconLandscapeOutlined, IconLandscapeRounded, IconLandscapeSharp, IconLandscapeTwoTone)
