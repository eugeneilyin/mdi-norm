import { createThemedIcon } from './utils/createThemedIcon'
import { IconLocalBarFilled } from './IconLocalBarFilled'
import { IconLocalBarOutlined } from './IconLocalBarOutlined'
import { IconLocalBarRounded } from './IconLocalBarRounded'
import { IconLocalBarSharp } from './IconLocalBarSharp'
import { IconLocalBarTwoTone } from './IconLocalBarTwoTone'

export const IconLocalBar = /*#__PURE__*/ props =>
  createThemedIcon(props, IconLocalBarFilled, IconLocalBarOutlined, IconLocalBarRounded, IconLocalBarSharp, IconLocalBarTwoTone)
