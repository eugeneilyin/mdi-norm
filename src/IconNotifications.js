import { createThemedIcon } from './utils/createThemedIcon'
import { IconNotificationsFilled } from './IconNotificationsFilled'
import { IconNotificationsOutlined } from './IconNotificationsOutlined'
import { IconNotificationsRounded } from './IconNotificationsRounded'
import { IconNotificationsSharp } from './IconNotificationsSharp'
import { IconNotificationsTwoTone } from './IconNotificationsTwoTone'

export const IconNotifications = /*#__PURE__*/ props =>
  createThemedIcon(props, IconNotificationsFilled, IconNotificationsOutlined, IconNotificationsRounded, IconNotificationsSharp, IconNotificationsTwoTone)
