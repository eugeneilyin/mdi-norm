import { createThemedIcon } from './utils/createThemedIcon'
import { IconDragHandleFilled } from './IconDragHandleFilled'
import { IconDragHandleOutlined } from './IconDragHandleOutlined'
import { IconDragHandleRounded } from './IconDragHandleRounded'
import { IconDragHandleSharp } from './IconDragHandleSharp'
import { IconDragHandleTwoTone } from './IconDragHandleTwoTone'

export const IconDragHandle = /*#__PURE__*/ props =>
  createThemedIcon(props, IconDragHandleFilled, IconDragHandleOutlined, IconDragHandleRounded, IconDragHandleSharp, IconDragHandleTwoTone)
