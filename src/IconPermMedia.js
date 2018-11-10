import { createThemedIcon } from './utils/createThemedIcon'
import { IconPermMediaFilled } from './IconPermMediaFilled'
import { IconPermMediaOutlined } from './IconPermMediaOutlined'
import { IconPermMediaRounded } from './IconPermMediaRounded'
import { IconPermMediaSharp } from './IconPermMediaSharp'
import { IconPermMediaTwoTone } from './IconPermMediaTwoTone'

export const IconPermMedia = /*#__PURE__*/ props =>
  createThemedIcon(props, IconPermMediaFilled, IconPermMediaOutlined, IconPermMediaRounded, IconPermMediaSharp, IconPermMediaTwoTone)
