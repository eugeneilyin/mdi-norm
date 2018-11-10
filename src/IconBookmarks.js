import { createThemedIcon } from './utils/createThemedIcon'
import { IconBookmarksFilled } from './IconBookmarksFilled'
import { IconBookmarksOutlined } from './IconBookmarksOutlined'
import { IconBookmarksRounded } from './IconBookmarksRounded'
import { IconBookmarksSharp } from './IconBookmarksSharp'
import { IconBookmarksTwoTone } from './IconBookmarksTwoTone'

export const IconBookmarks = /*#__PURE__*/ props =>
  createThemedIcon(props, IconBookmarksFilled, IconBookmarksOutlined, IconBookmarksRounded, IconBookmarksSharp, IconBookmarksTwoTone)
