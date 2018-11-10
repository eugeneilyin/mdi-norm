import { createThemedIcon } from './utils/createThemedIcon'
import { IconBookmarkBorderFilled } from './IconBookmarkBorderFilled'
import { IconBookmarkBorderOutlined } from './IconBookmarkBorderOutlined'
import { IconBookmarkBorderRounded } from './IconBookmarkBorderRounded'
import { IconBookmarkBorderSharp } from './IconBookmarkBorderSharp'
import { IconBookmarkBorderTwoTone } from './IconBookmarkBorderTwoTone'

export const IconBookmarkBorder = /*#__PURE__*/ props =>
  createThemedIcon(props, IconBookmarkBorderFilled, IconBookmarkBorderOutlined, IconBookmarkBorderRounded, IconBookmarkBorderSharp, IconBookmarkBorderTwoTone)
