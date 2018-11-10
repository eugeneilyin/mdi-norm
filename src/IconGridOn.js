import { createThemedIcon } from './utils/createThemedIcon'
import { IconGridOnFilled } from './IconGridOnFilled'
import { IconGridOnOutlined } from './IconGridOnOutlined'
import { IconGridOnRounded } from './IconGridOnRounded'
import { IconGridOnSharp } from './IconGridOnSharp'
import { IconGridOnTwoTone } from './IconGridOnTwoTone'

export const IconGridOn = /*#__PURE__*/ props =>
  createThemedIcon(props, IconGridOnFilled, IconGridOnOutlined, IconGridOnRounded, IconGridOnSharp, IconGridOnTwoTone)
