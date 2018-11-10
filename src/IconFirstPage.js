import { createThemedIcon } from './utils/createThemedIcon'
import { IconFirstPageFilled } from './IconFirstPageFilled'
import { IconFirstPageOutlined } from './IconFirstPageOutlined'
import { IconFirstPageRounded } from './IconFirstPageRounded'
import { IconFirstPageSharp } from './IconFirstPageSharp'
import { IconFirstPageTwoTone } from './IconFirstPageTwoTone'

export const IconFirstPage = /*#__PURE__*/ props =>
  createThemedIcon(props, IconFirstPageFilled, IconFirstPageOutlined, IconFirstPageRounded, IconFirstPageSharp, IconFirstPageTwoTone)
