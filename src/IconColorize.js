import { createThemedIcon } from './utils/createThemedIcon'
import { IconColorizeFilled } from './IconColorizeFilled'
import { IconColorizeOutlined } from './IconColorizeOutlined'
import { IconColorizeRounded } from './IconColorizeRounded'
import { IconColorizeSharp } from './IconColorizeSharp'
import { IconColorizeTwoTone } from './IconColorizeTwoTone'

export const IconColorize = /*#__PURE__*/ props =>
  createThemedIcon(props, IconColorizeFilled, IconColorizeOutlined, IconColorizeRounded, IconColorizeSharp, IconColorizeTwoTone)
