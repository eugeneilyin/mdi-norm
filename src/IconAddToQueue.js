import { createThemedIcon } from './utils/createThemedIcon'
import { IconAddToQueueFilled } from './IconAddToQueueFilled'
import { IconAddToQueueOutlined } from './IconAddToQueueOutlined'
import { IconAddToQueueRounded } from './IconAddToQueueRounded'
import { IconAddToQueueSharp } from './IconAddToQueueSharp'
import { IconAddToQueueTwoTone } from './IconAddToQueueTwoTone'

export const IconAddToQueue = /*#__PURE__*/ props =>
  createThemedIcon(props, IconAddToQueueFilled, IconAddToQueueOutlined, IconAddToQueueRounded, IconAddToQueueSharp, IconAddToQueueTwoTone)
