import { createThemedIcon } from './utils/createThemedIcon'
import { IconGestureFilled } from './IconGestureFilled'
import { IconGestureOutlined } from './IconGestureOutlined'
import { IconGestureRounded } from './IconGestureRounded'
import { IconGestureSharp } from './IconGestureSharp'
import { IconGestureTwoTone } from './IconGestureTwoTone'

export const IconGesture = /*#__PURE__*/ props =>
  createThemedIcon(props, IconGestureFilled, IconGestureOutlined, IconGestureRounded, IconGestureSharp, IconGestureTwoTone)
