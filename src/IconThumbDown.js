import { createThemedIcon } from './utils/createThemedIcon'
import { IconThumbDownFilled } from './IconThumbDownFilled'
import { IconThumbDownOutlined } from './IconThumbDownOutlined'
import { IconThumbDownRounded } from './IconThumbDownRounded'
import { IconThumbDownSharp } from './IconThumbDownSharp'
import { IconThumbDownTwoTone } from './IconThumbDownTwoTone'

export const IconThumbDown = /*#__PURE__*/ props =>
  createThemedIcon(props, IconThumbDownFilled, IconThumbDownOutlined, IconThumbDownRounded, IconThumbDownSharp, IconThumbDownTwoTone)
