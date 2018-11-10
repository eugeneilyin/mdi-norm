import { createThemedIcon } from './utils/createThemedIcon'
import { IconThumbUpFilled } from './IconThumbUpFilled'
import { IconThumbUpOutlined } from './IconThumbUpOutlined'
import { IconThumbUpRounded } from './IconThumbUpRounded'
import { IconThumbUpSharp } from './IconThumbUpSharp'
import { IconThumbUpTwoTone } from './IconThumbUpTwoTone'

export const IconThumbUp = /*#__PURE__*/ props =>
  createThemedIcon(props, IconThumbUpFilled, IconThumbUpOutlined, IconThumbUpRounded, IconThumbUpSharp, IconThumbUpTwoTone)
