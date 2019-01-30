import { createThemedIcon } from './utils/createThemedIcon'
import { FilledNotificationImportant } from './FilledNotificationImportant'
import { OutlineNotificationImportant } from './OutlineNotificationImportant'
import { RoundNotificationImportant } from './RoundNotificationImportant'
import { SharpNotificationImportant } from './SharpNotificationImportant'
import { TwoToneNotificationImportant } from './TwoToneNotificationImportant'

export const NotificationImportant = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledNotificationImportant, OutlineNotificationImportant, RoundNotificationImportant, SharpNotificationImportant, TwoToneNotificationImportant)
