import { createThemedIcon } from './utils/createThemedIcon'
import { IconTapAndPlayFilled } from './IconTapAndPlayFilled'
import { IconTapAndPlayOutlined } from './IconTapAndPlayOutlined'
import { IconTapAndPlayRounded } from './IconTapAndPlayRounded'
import { IconTapAndPlaySharp } from './IconTapAndPlaySharp'
import { IconTapAndPlayTwoTone } from './IconTapAndPlayTwoTone'

export const IconTapAndPlay = /*#__PURE__*/ props =>
  createThemedIcon(props, IconTapAndPlayFilled, IconTapAndPlayOutlined, IconTapAndPlayRounded, IconTapAndPlaySharp, IconTapAndPlayTwoTone)
