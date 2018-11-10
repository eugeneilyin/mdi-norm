import { createThemedIcon } from './utils/createThemedIcon'
import { IconWorkOutlineFilled } from './IconWorkOutlineFilled'
import { IconWorkOutlineOutlined } from './IconWorkOutlineOutlined'
import { IconWorkOutlineRounded } from './IconWorkOutlineRounded'
import { IconWorkOutlineSharp } from './IconWorkOutlineSharp'
import { IconWorkOutlineTwoTone } from './IconWorkOutlineTwoTone'

export const IconWorkOutline = /*#__PURE__*/ props =>
  createThemedIcon(props, IconWorkOutlineFilled, IconWorkOutlineOutlined, IconWorkOutlineRounded, IconWorkOutlineSharp, IconWorkOutlineTwoTone)
