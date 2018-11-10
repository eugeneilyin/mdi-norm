import { createThemedIcon } from './utils/createThemedIcon'
import { IconCommentFilled } from './IconCommentFilled'
import { IconCommentOutlined } from './IconCommentOutlined'
import { IconCommentRounded } from './IconCommentRounded'
import { IconCommentSharp } from './IconCommentSharp'
import { IconCommentTwoTone } from './IconCommentTwoTone'

export const IconComment = /*#__PURE__*/ props =>
  createThemedIcon(props, IconCommentFilled, IconCommentOutlined, IconCommentRounded, IconCommentSharp, IconCommentTwoTone)
