import { createThemedIcon } from './utils/createThemedIcon'
import { IconStarsFilled } from './IconStarsFilled'
import { IconStarsOutlined } from './IconStarsOutlined'
import { IconStarsRounded } from './IconStarsRounded'
import { IconStarsSharp } from './IconStarsSharp'
import { IconStarsTwoTone } from './IconStarsTwoTone'

export const IconStars = /*#__PURE__*/ props =>
  createThemedIcon(props, IconStarsFilled, IconStarsOutlined, IconStarsRounded, IconStarsSharp, IconStarsTwoTone)
