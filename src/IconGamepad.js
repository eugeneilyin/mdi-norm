import { createThemedIcon } from './utils/createThemedIcon'
import { IconGamepadFilled } from './IconGamepadFilled'
import { IconGamepadOutlined } from './IconGamepadOutlined'
import { IconGamepadRounded } from './IconGamepadRounded'
import { IconGamepadSharp } from './IconGamepadSharp'
import { IconGamepadTwoTone } from './IconGamepadTwoTone'

export const IconGamepad = /*#__PURE__*/ props =>
  createThemedIcon(props, IconGamepadFilled, IconGamepadOutlined, IconGamepadRounded, IconGamepadSharp, IconGamepadTwoTone)
