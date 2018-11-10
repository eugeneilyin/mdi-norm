import { createThemedIcon } from './utils/createThemedIcon'
import { IconVisibilityFilled } from './IconVisibilityFilled'
import { IconVisibilityOutlined } from './IconVisibilityOutlined'
import { IconVisibilityRounded } from './IconVisibilityRounded'
import { IconVisibilitySharp } from './IconVisibilitySharp'
import { IconVisibilityTwoTone } from './IconVisibilityTwoTone'

export const IconVisibility = /*#__PURE__*/ props =>
  createThemedIcon(props, IconVisibilityFilled, IconVisibilityOutlined, IconVisibilityRounded, IconVisibilitySharp, IconVisibilityTwoTone)
