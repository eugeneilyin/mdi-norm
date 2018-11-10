import { createThemedIcon } from './utils/createThemedIcon'
import { IconMailOutlineFilled } from './IconMailOutlineFilled'
import { IconMailOutlineOutlined } from './IconMailOutlineOutlined'
import { IconMailOutlineRounded } from './IconMailOutlineRounded'
import { IconMailOutlineSharp } from './IconMailOutlineSharp'
import { IconMailOutlineTwoTone } from './IconMailOutlineTwoTone'

export const IconMailOutline = /*#__PURE__*/ props =>
  createThemedIcon(props, IconMailOutlineFilled, IconMailOutlineOutlined, IconMailOutlineRounded, IconMailOutlineSharp, IconMailOutlineTwoTone)
