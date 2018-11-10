import { createThemedIcon } from './utils/createThemedIcon'
import { IconSnoozeFilled } from './IconSnoozeFilled'
import { IconSnoozeOutlined } from './IconSnoozeOutlined'
import { IconSnoozeRounded } from './IconSnoozeRounded'
import { IconSnoozeSharp } from './IconSnoozeSharp'
import { IconSnoozeTwoTone } from './IconSnoozeTwoTone'

export const IconSnooze = /*#__PURE__*/ props =>
  createThemedIcon(props, IconSnoozeFilled, IconSnoozeOutlined, IconSnoozeRounded, IconSnoozeSharp, IconSnoozeTwoTone)
