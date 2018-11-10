import { createThemedIcon } from './utils/createThemedIcon'
import { IconOpacityFilled } from './IconOpacityFilled'
import { IconOpacityOutlined } from './IconOpacityOutlined'
import { IconOpacityRounded } from './IconOpacityRounded'
import { IconOpacitySharp } from './IconOpacitySharp'
import { IconOpacityTwoTone } from './IconOpacityTwoTone'

export const IconOpacity = /*#__PURE__*/ props =>
  createThemedIcon(props, IconOpacityFilled, IconOpacityOutlined, IconOpacityRounded, IconOpacitySharp, IconOpacityTwoTone)
