import { createThemedIcon } from './utils/createThemedIcon'
import { IconSortFilled } from './IconSortFilled'
import { IconSortOutlined } from './IconSortOutlined'
import { IconSortRounded } from './IconSortRounded'
import { IconSortSharp } from './IconSortSharp'
import { IconSortTwoTone } from './IconSortTwoTone'

export const IconSort = /*#__PURE__*/ props =>
  createThemedIcon(props, IconSortFilled, IconSortOutlined, IconSortRounded, IconSortSharp, IconSortTwoTone)
