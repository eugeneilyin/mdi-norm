import { createThemedIcon } from './utils/createThemedIcon'
import { IconErrorOutlineFilled } from './IconErrorOutlineFilled'
import { IconErrorOutlineOutlined } from './IconErrorOutlineOutlined'
import { IconErrorOutlineRounded } from './IconErrorOutlineRounded'
import { IconErrorOutlineSharp } from './IconErrorOutlineSharp'
import { IconErrorOutlineTwoTone } from './IconErrorOutlineTwoTone'

export const IconErrorOutline = /*#__PURE__*/ props =>
  createThemedIcon(props, IconErrorOutlineFilled, IconErrorOutlineOutlined, IconErrorOutlineRounded, IconErrorOutlineSharp, IconErrorOutlineTwoTone)
