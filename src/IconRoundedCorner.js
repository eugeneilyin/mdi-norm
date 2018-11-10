import { createThemedIcon } from './utils/createThemedIcon'
import { IconRoundedCornerFilled } from './IconRoundedCornerFilled'
import { IconRoundedCornerOutlined } from './IconRoundedCornerOutlined'
import { IconRoundedCornerRounded } from './IconRoundedCornerRounded'
import { IconRoundedCornerSharp } from './IconRoundedCornerSharp'
import { IconRoundedCornerTwoTone } from './IconRoundedCornerTwoTone'

export const IconRoundedCorner = /*#__PURE__*/ props =>
  createThemedIcon(props, IconRoundedCornerFilled, IconRoundedCornerOutlined, IconRoundedCornerRounded, IconRoundedCornerSharp, IconRoundedCornerTwoTone)
