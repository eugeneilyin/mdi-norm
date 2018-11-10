import { createThemedIcon } from './utils/createThemedIcon'
import { IconStarFilled } from './IconStarFilled'
import { IconStarOutlined } from './IconStarOutlined'
import { IconStarRounded } from './IconStarRounded'
import { IconStarSharp } from './IconStarSharp'
import { IconStarTwoTone } from './IconStarTwoTone'

export const IconStar = /*#__PURE__*/ props =>
  createThemedIcon(props, IconStarFilled, IconStarOutlined, IconStarRounded, IconStarSharp, IconStarTwoTone)
