import { createThemedIcon } from './utils/createThemedIcon'
import { IconNotificationsNoneFilled } from './IconNotificationsNoneFilled'
import { IconNotificationsNoneOutlined } from './IconNotificationsNoneOutlined'
import { IconNotificationsNoneRounded } from './IconNotificationsNoneRounded'
import { IconNotificationsNoneSharp } from './IconNotificationsNoneSharp'
import { IconNotificationsNoneTwoTone } from './IconNotificationsNoneTwoTone'

export const IconNotificationsNone = /*#__PURE__*/ props =>
  createThemedIcon(props, IconNotificationsNoneFilled, IconNotificationsNoneOutlined, IconNotificationsNoneRounded, IconNotificationsNoneSharp, IconNotificationsNoneTwoTone)
