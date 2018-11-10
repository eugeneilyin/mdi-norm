import { createThemedIcon } from './utils/createThemedIcon'
import { IconFavoriteBorderFilled } from './IconFavoriteBorderFilled'
import { IconFavoriteBorderOutlined } from './IconFavoriteBorderOutlined'
import { IconFavoriteBorderRounded } from './IconFavoriteBorderRounded'
import { IconFavoriteBorderSharp } from './IconFavoriteBorderSharp'
import { IconFavoriteBorderTwoTone } from './IconFavoriteBorderTwoTone'

export const IconFavoriteBorder = /*#__PURE__*/ props =>
  createThemedIcon(props, IconFavoriteBorderFilled, IconFavoriteBorderOutlined, IconFavoriteBorderRounded, IconFavoriteBorderSharp, IconFavoriteBorderTwoTone)
