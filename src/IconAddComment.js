import { createThemedIcon } from './utils/createThemedIcon'
import { IconAddCommentFilled } from './IconAddCommentFilled'
import { IconAddCommentOutlined } from './IconAddCommentOutlined'
import { IconAddCommentRounded } from './IconAddCommentRounded'
import { IconAddCommentSharp } from './IconAddCommentSharp'
import { IconAddCommentTwoTone } from './IconAddCommentTwoTone'

export const IconAddComment = /*#__PURE__*/ props =>
  createThemedIcon(props, IconAddCommentFilled, IconAddCommentOutlined, IconAddCommentRounded, IconAddCommentSharp, IconAddCommentTwoTone)
