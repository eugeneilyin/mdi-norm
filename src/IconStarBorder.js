import { createThemedIcon } from './utils/createThemedIcon'
import { IconStarBorderFilled } from './IconStarBorderFilled'
import { IconStarBorderOutlined } from './IconStarBorderOutlined'
import { IconStarBorderRounded } from './IconStarBorderRounded'
import { IconStarBorderSharp } from './IconStarBorderSharp'
import { IconStarBorderTwoTone } from './IconStarBorderTwoTone'

export const IconStarBorder = /*#__PURE__*/ props =>
  createThemedIcon(props, IconStarBorderFilled, IconStarBorderOutlined, IconStarBorderRounded, IconStarBorderSharp, IconStarBorderTwoTone)
