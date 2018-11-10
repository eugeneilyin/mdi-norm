import { createThemedIcon } from './utils/createThemedIcon'
import { IconDeleteOutlineFilled } from './IconDeleteOutlineFilled'
import { IconDeleteOutlineOutlined } from './IconDeleteOutlineOutlined'
import { IconDeleteOutlineRounded } from './IconDeleteOutlineRounded'
import { IconDeleteOutlineSharp } from './IconDeleteOutlineSharp'
import { IconDeleteOutlineTwoTone } from './IconDeleteOutlineTwoTone'

export const IconDeleteOutline = /*#__PURE__*/ props =>
  createThemedIcon(props, IconDeleteOutlineFilled, IconDeleteOutlineOutlined, IconDeleteOutlineRounded, IconDeleteOutlineSharp, IconDeleteOutlineTwoTone)
