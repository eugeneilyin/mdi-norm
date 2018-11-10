import { createThemedIcon } from './utils/createThemedIcon'
import { IconWatchFilled } from './IconWatchFilled'
import { IconWatchOutlined } from './IconWatchOutlined'
import { IconWatchRounded } from './IconWatchRounded'
import { IconWatchSharp } from './IconWatchSharp'
import { IconWatchTwoTone } from './IconWatchTwoTone'

export const IconWatch = /*#__PURE__*/ props =>
  createThemedIcon(props, IconWatchFilled, IconWatchOutlined, IconWatchRounded, IconWatchSharp, IconWatchTwoTone)
