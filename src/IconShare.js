import { createThemedIcon } from './utils/createThemedIcon'
import { IconShareFilled } from './IconShareFilled'
import { IconShareOutlined } from './IconShareOutlined'
import { IconShareRounded } from './IconShareRounded'
import { IconShareSharp } from './IconShareSharp'
import { IconShareTwoTone } from './IconShareTwoTone'

export const IconShare = /*#__PURE__*/ props =>
  createThemedIcon(props, IconShareFilled, IconShareOutlined, IconShareRounded, IconShareSharp, IconShareTwoTone)
