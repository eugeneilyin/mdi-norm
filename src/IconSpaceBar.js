import { createThemedIcon } from './utils/createThemedIcon'
import { IconSpaceBarFilled } from './IconSpaceBarFilled'
import { IconSpaceBarOutlined } from './IconSpaceBarOutlined'
import { IconSpaceBarRounded } from './IconSpaceBarRounded'
import { IconSpaceBarSharp } from './IconSpaceBarSharp'
import { IconSpaceBarTwoTone } from './IconSpaceBarTwoTone'

export const IconSpaceBar = /*#__PURE__*/ props =>
  createThemedIcon(props, IconSpaceBarFilled, IconSpaceBarOutlined, IconSpaceBarRounded, IconSpaceBarSharp, IconSpaceBarTwoTone)
