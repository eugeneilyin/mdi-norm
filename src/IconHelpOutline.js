import { createThemedIcon } from './utils/createThemedIcon'
import { IconHelpOutlineFilled } from './IconHelpOutlineFilled'
import { IconHelpOutlineOutlined } from './IconHelpOutlineOutlined'
import { IconHelpOutlineRounded } from './IconHelpOutlineRounded'
import { IconHelpOutlineSharp } from './IconHelpOutlineSharp'
import { IconHelpOutlineTwoTone } from './IconHelpOutlineTwoTone'

export const IconHelpOutline = /*#__PURE__*/ props =>
  createThemedIcon(props, IconHelpOutlineFilled, IconHelpOutlineOutlined, IconHelpOutlineRounded, IconHelpOutlineSharp, IconHelpOutlineTwoTone)
