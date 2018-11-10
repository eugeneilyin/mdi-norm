import { createThemedIcon } from './utils/createThemedIcon'
import { IconQueueFilled } from './IconQueueFilled'
import { IconQueueOutlined } from './IconQueueOutlined'
import { IconQueueRounded } from './IconQueueRounded'
import { IconQueueSharp } from './IconQueueSharp'
import { IconQueueTwoTone } from './IconQueueTwoTone'

export const IconQueue = /*#__PURE__*/ props =>
  createThemedIcon(props, IconQueueFilled, IconQueueOutlined, IconQueueRounded, IconQueueSharp, IconQueueTwoTone)
