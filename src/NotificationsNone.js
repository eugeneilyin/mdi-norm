import { createThemedIcon } from './utils/createThemedIcon'
import { FilledNotificationsNone } from './FilledNotificationsNone'
import { OutlineNotificationsNone } from './OutlineNotificationsNone'
import { RoundNotificationsNone } from './RoundNotificationsNone'
import { SharpNotificationsNone } from './SharpNotificationsNone'
import { TwoToneNotificationsNone } from './TwoToneNotificationsNone'

export const NotificationsNone = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledNotificationsNone, OutlineNotificationsNone, RoundNotificationsNone, SharpNotificationsNone, TwoToneNotificationsNone)
