import { createThemedIcon } from './utils/createThemedIcon'
import { IconEventBusyFilled } from './IconEventBusyFilled'
import { IconEventBusyOutlined } from './IconEventBusyOutlined'
import { IconEventBusyRounded } from './IconEventBusyRounded'
import { IconEventBusySharp } from './IconEventBusySharp'
import { IconEventBusyTwoTone } from './IconEventBusyTwoTone'

export const IconEventBusy = /*#__PURE__*/ props =>
  createThemedIcon(props, IconEventBusyFilled, IconEventBusyOutlined, IconEventBusyRounded, IconEventBusySharp, IconEventBusyTwoTone)
