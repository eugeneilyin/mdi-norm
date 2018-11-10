import { createThemedIcon } from './utils/createThemedIcon'
import { IconSyncFilled } from './IconSyncFilled'
import { IconSyncOutlined } from './IconSyncOutlined'
import { IconSyncRounded } from './IconSyncRounded'
import { IconSyncSharp } from './IconSyncSharp'
import { IconSyncTwoTone } from './IconSyncTwoTone'

export const IconSync = /*#__PURE__*/ props =>
  createThemedIcon(props, IconSyncFilled, IconSyncOutlined, IconSyncRounded, IconSyncSharp, IconSyncTwoTone)
