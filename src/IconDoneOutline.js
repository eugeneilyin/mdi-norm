import { createThemedIcon } from './utils/createThemedIcon'
import { IconDoneOutlineFilled } from './IconDoneOutlineFilled'
import { IconDoneOutlineOutlined } from './IconDoneOutlineOutlined'
import { IconDoneOutlineRounded } from './IconDoneOutlineRounded'
import { IconDoneOutlineSharp } from './IconDoneOutlineSharp'
import { IconDoneOutlineTwoTone } from './IconDoneOutlineTwoTone'

export const IconDoneOutline = /*#__PURE__*/ props =>
  createThemedIcon(props, IconDoneOutlineFilled, IconDoneOutlineOutlined, IconDoneOutlineRounded, IconDoneOutlineSharp, IconDoneOutlineTwoTone)
