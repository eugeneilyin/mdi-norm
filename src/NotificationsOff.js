import { createThemedIcon } from './utils/createThemedIcon'
import { FilledNotificationsOff } from './FilledNotificationsOff'
import { OutlineNotificationsOff } from './OutlineNotificationsOff'
import { RoundNotificationsOff } from './RoundNotificationsOff'
import { SharpNotificationsOff } from './SharpNotificationsOff'
import { TwoToneNotificationsOff } from './TwoToneNotificationsOff'

export const NotificationsOff = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledNotificationsOff, OutlineNotificationsOff, RoundNotificationsOff, SharpNotificationsOff, TwoToneNotificationsOff)
