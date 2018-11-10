import { createThemedIcon } from './utils/createThemedIcon'
import { IconPlaceFilled } from './IconPlaceFilled'
import { IconPlaceOutlined } from './IconPlaceOutlined'
import { IconPlaceRounded } from './IconPlaceRounded'
import { IconPlaceSharp } from './IconPlaceSharp'
import { IconPlaceTwoTone } from './IconPlaceTwoTone'

export const IconPlace = /*#__PURE__*/ props =>
  createThemedIcon(props, IconPlaceFilled, IconPlaceOutlined, IconPlaceRounded, IconPlaceSharp, IconPlaceTwoTone)
