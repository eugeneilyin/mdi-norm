import { createThemedIcon } from './utils/createThemedIcon'
import { IconBookmarkFilled } from './IconBookmarkFilled'
import { IconBookmarkOutlined } from './IconBookmarkOutlined'
import { IconBookmarkRounded } from './IconBookmarkRounded'
import { IconBookmarkSharp } from './IconBookmarkSharp'
import { IconBookmarkTwoTone } from './IconBookmarkTwoTone'

export const IconBookmark = /*#__PURE__*/ props =>
  createThemedIcon(props, IconBookmarkFilled, IconBookmarkOutlined, IconBookmarkRounded, IconBookmarkSharp, IconBookmarkTwoTone)
