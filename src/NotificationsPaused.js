import { createThemedIcon } from './utils/createThemedIcon'
import { FilledNotificationsPaused } from './FilledNotificationsPaused'
import { OutlineNotificationsPaused } from './OutlineNotificationsPaused'
import { RoundNotificationsPaused } from './RoundNotificationsPaused'
import { SharpNotificationsPaused } from './SharpNotificationsPaused'
import { TwoToneNotificationsPaused } from './TwoToneNotificationsPaused'

export const NotificationsPaused = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledNotificationsPaused, OutlineNotificationsPaused, RoundNotificationsPaused, SharpNotificationsPaused, TwoToneNotificationsPaused)
