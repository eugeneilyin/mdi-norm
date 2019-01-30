import { createThemedIcon } from './utils/createThemedIcon'
import { FilledNotifications } from './FilledNotifications'
import { OutlineNotifications } from './OutlineNotifications'
import { RoundNotifications } from './RoundNotifications'
import { SharpNotifications } from './SharpNotifications'
import { TwoToneNotifications } from './TwoToneNotifications'

export const Notifications = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledNotifications, OutlineNotifications, RoundNotifications, SharpNotifications, TwoToneNotifications)
