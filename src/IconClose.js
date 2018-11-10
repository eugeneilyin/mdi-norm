import { createThemedIcon } from './utils/createThemedIcon'
import { IconCloseFilled } from './IconCloseFilled'
import { IconCloseOutlined } from './IconCloseOutlined'
import { IconCloseRounded } from './IconCloseRounded'
import { IconCloseSharp } from './IconCloseSharp'
import { IconCloseTwoTone } from './IconCloseTwoTone'

export const IconClose = /*#__PURE__*/ props =>
  createThemedIcon(props, IconCloseFilled, IconCloseOutlined, IconCloseRounded, IconCloseSharp, IconCloseTwoTone)
