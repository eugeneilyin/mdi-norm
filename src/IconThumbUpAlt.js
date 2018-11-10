import { createThemedIcon } from './utils/createThemedIcon'
import { IconThumbUpAltFilled } from './IconThumbUpAltFilled'
import { IconThumbUpAltOutlined } from './IconThumbUpAltOutlined'
import { IconThumbUpAltRounded } from './IconThumbUpAltRounded'
import { IconThumbUpAltSharp } from './IconThumbUpAltSharp'
import { IconThumbUpAltTwoTone } from './IconThumbUpAltTwoTone'

export const IconThumbUpAlt = /*#__PURE__*/ props =>
  createThemedIcon(props, IconThumbUpAltFilled, IconThumbUpAltOutlined, IconThumbUpAltRounded, IconThumbUpAltSharp, IconThumbUpAltTwoTone)
