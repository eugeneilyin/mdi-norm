import { createThemedIcon } from './utils/createThemedIcon'
import { IconHelpFilled } from './IconHelpFilled'
import { IconHelpOutlined } from './IconHelpOutlined'
import { IconHelpRounded } from './IconHelpRounded'
import { IconHelpSharp } from './IconHelpSharp'
import { IconHelpTwoTone } from './IconHelpTwoTone'

export const IconHelp = /*#__PURE__*/ props =>
  createThemedIcon(props, IconHelpFilled, IconHelpOutlined, IconHelpRounded, IconHelpSharp, IconHelpTwoTone)
