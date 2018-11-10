import { createThemedIcon } from './utils/createThemedIcon'
import { IconStarHalfFilled } from './IconStarHalfFilled'
import { IconStarHalfOutlined } from './IconStarHalfOutlined'
import { IconStarHalfRounded } from './IconStarHalfRounded'
import { IconStarHalfSharp } from './IconStarHalfSharp'
import { IconStarHalfTwoTone } from './IconStarHalfTwoTone'

export const IconStarHalf = /*#__PURE__*/ props =>
  createThemedIcon(props, IconStarHalfFilled, IconStarHalfOutlined, IconStarHalfRounded, IconStarHalfSharp, IconStarHalfTwoTone)
