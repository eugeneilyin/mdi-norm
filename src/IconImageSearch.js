import { createThemedIcon } from './utils/createThemedIcon'
import { IconImageSearchFilled } from './IconImageSearchFilled'
import { IconImageSearchOutlined } from './IconImageSearchOutlined'
import { IconImageSearchRounded } from './IconImageSearchRounded'
import { IconImageSearchSharp } from './IconImageSearchSharp'
import { IconImageSearchTwoTone } from './IconImageSearchTwoTone'

export const IconImageSearch = /*#__PURE__*/ props =>
  createThemedIcon(props, IconImageSearchFilled, IconImageSearchOutlined, IconImageSearchRounded, IconImageSearchSharp, IconImageSearchTwoTone)
