import { createThemedIcon } from './utils/createThemedIcon'
import { IconFavoriteFilled } from './IconFavoriteFilled'
import { IconFavoriteOutlined } from './IconFavoriteOutlined'
import { IconFavoriteRounded } from './IconFavoriteRounded'
import { IconFavoriteSharp } from './IconFavoriteSharp'
import { IconFavoriteTwoTone } from './IconFavoriteTwoTone'

export const IconFavorite = /*#__PURE__*/ props =>
  createThemedIcon(props, IconFavoriteFilled, IconFavoriteOutlined, IconFavoriteRounded, IconFavoriteSharp, IconFavoriteTwoTone)
