import { createThemedIcon } from './utils/createThemedIcon'
import { IconAddToHomeScreenFilled } from './IconAddToHomeScreenFilled'
import { IconAddToHomeScreenOutlined } from './IconAddToHomeScreenOutlined'
import { IconAddToHomeScreenRounded } from './IconAddToHomeScreenRounded'
import { IconAddToHomeScreenSharp } from './IconAddToHomeScreenSharp'
import { IconAddToHomeScreenTwoTone } from './IconAddToHomeScreenTwoTone'

export const IconAddToHomeScreen = /*#__PURE__*/ props =>
  createThemedIcon(props, IconAddToHomeScreenFilled, IconAddToHomeScreenOutlined, IconAddToHomeScreenRounded, IconAddToHomeScreenSharp, IconAddToHomeScreenTwoTone)
