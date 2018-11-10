import { createThemedIcon } from './utils/createThemedIcon'
import { IconSearchFilled } from './IconSearchFilled'
import { IconSearchOutlined } from './IconSearchOutlined'
import { IconSearchRounded } from './IconSearchRounded'
import { IconSearchSharp } from './IconSearchSharp'
import { IconSearchTwoTone } from './IconSearchTwoTone'

export const IconSearch = /*#__PURE__*/ props =>
  createThemedIcon(props, IconSearchFilled, IconSearchOutlined, IconSearchRounded, IconSearchSharp, IconSearchTwoTone)
