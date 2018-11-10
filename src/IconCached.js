import { createThemedIcon } from './utils/createThemedIcon'
import { IconCachedFilled } from './IconCachedFilled'
import { IconCachedOutlined } from './IconCachedOutlined'
import { IconCachedRounded } from './IconCachedRounded'
import { IconCachedSharp } from './IconCachedSharp'
import { IconCachedTwoTone } from './IconCachedTwoTone'

export const IconCached = /*#__PURE__*/ props =>
  createThemedIcon(props, IconCachedFilled, IconCachedOutlined, IconCachedRounded, IconCachedSharp, IconCachedTwoTone)
