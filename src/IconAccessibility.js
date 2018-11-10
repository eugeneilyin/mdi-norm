import { createThemedIcon } from './utils/createThemedIcon'
import { IconAccessibilityFilled } from './IconAccessibilityFilled'
import { IconAccessibilityOutlined } from './IconAccessibilityOutlined'
import { IconAccessibilityRounded } from './IconAccessibilityRounded'
import { IconAccessibilitySharp } from './IconAccessibilitySharp'
import { IconAccessibilityTwoTone } from './IconAccessibilityTwoTone'

export const IconAccessibility = /*#__PURE__*/ props =>
  createThemedIcon(props, IconAccessibilityFilled, IconAccessibilityOutlined, IconAccessibilityRounded, IconAccessibilitySharp, IconAccessibilityTwoTone)
