import { createThemedIcon } from './utils/createThemedIcon'
import { IconPersonOutlineFilled } from './IconPersonOutlineFilled'
import { IconPersonOutlineOutlined } from './IconPersonOutlineOutlined'
import { IconPersonOutlineRounded } from './IconPersonOutlineRounded'
import { IconPersonOutlineSharp } from './IconPersonOutlineSharp'
import { IconPersonOutlineTwoTone } from './IconPersonOutlineTwoTone'

export const IconPersonOutline = /*#__PURE__*/ props =>
  createThemedIcon(props, IconPersonOutlineFilled, IconPersonOutlineOutlined, IconPersonOutlineRounded, IconPersonOutlineSharp, IconPersonOutlineTwoTone)
