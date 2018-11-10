import { createThemedIcon } from './utils/createThemedIcon'
import { IconCastFilled } from './IconCastFilled'
import { IconCastOutlined } from './IconCastOutlined'
import { IconCastRounded } from './IconCastRounded'
import { IconCastSharp } from './IconCastSharp'
import { IconCastTwoTone } from './IconCastTwoTone'

export const IconCast = /*#__PURE__*/ props =>
  createThemedIcon(props, IconCastFilled, IconCastOutlined, IconCastRounded, IconCastSharp, IconCastTwoTone)
