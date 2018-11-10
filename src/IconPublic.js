import { createThemedIcon } from './utils/createThemedIcon'
import { IconPublicFilled } from './IconPublicFilled'
import { IconPublicOutlined } from './IconPublicOutlined'
import { IconPublicRounded } from './IconPublicRounded'
import { IconPublicSharp } from './IconPublicSharp'
import { IconPublicTwoTone } from './IconPublicTwoTone'

export const IconPublic = /*#__PURE__*/ props =>
  createThemedIcon(props, IconPublicFilled, IconPublicOutlined, IconPublicRounded, IconPublicSharp, IconPublicTwoTone)
