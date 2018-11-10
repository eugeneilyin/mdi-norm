import { createThemedIcon } from './utils/createThemedIcon'
import { IconEventFilled } from './IconEventFilled'
import { IconEventOutlined } from './IconEventOutlined'
import { IconEventRounded } from './IconEventRounded'
import { IconEventSharp } from './IconEventSharp'
import { IconEventTwoTone } from './IconEventTwoTone'

export const IconEvent = /*#__PURE__*/ props =>
  createThemedIcon(props, IconEventFilled, IconEventOutlined, IconEventRounded, IconEventSharp, IconEventTwoTone)
