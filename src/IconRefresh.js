import { createThemedIcon } from './utils/createThemedIcon'
import { IconRefreshFilled } from './IconRefreshFilled'
import { IconRefreshOutlined } from './IconRefreshOutlined'
import { IconRefreshRounded } from './IconRefreshRounded'
import { IconRefreshSharp } from './IconRefreshSharp'
import { IconRefreshTwoTone } from './IconRefreshTwoTone'

export const IconRefresh = /*#__PURE__*/ props =>
  createThemedIcon(props, IconRefreshFilled, IconRefreshOutlined, IconRefreshRounded, IconRefreshSharp, IconRefreshTwoTone)
