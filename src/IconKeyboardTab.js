import { createThemedIcon } from './utils/createThemedIcon'
import { IconKeyboardTabFilled } from './IconKeyboardTabFilled'
import { IconKeyboardTabOutlined } from './IconKeyboardTabOutlined'
import { IconKeyboardTabRounded } from './IconKeyboardTabRounded'
import { IconKeyboardTabSharp } from './IconKeyboardTabSharp'
import { IconKeyboardTabTwoTone } from './IconKeyboardTabTwoTone'

export const IconKeyboardTab = /*#__PURE__*/ props =>
  createThemedIcon(props, IconKeyboardTabFilled, IconKeyboardTabOutlined, IconKeyboardTabRounded, IconKeyboardTabSharp, IconKeyboardTabTwoTone)
