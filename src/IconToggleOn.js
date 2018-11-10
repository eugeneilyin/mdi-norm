import { createThemedIcon } from './utils/createThemedIcon'
import { IconToggleOnFilled } from './IconToggleOnFilled'
import { IconToggleOnOutlined } from './IconToggleOnOutlined'
import { IconToggleOnRounded } from './IconToggleOnRounded'
import { IconToggleOnSharp } from './IconToggleOnSharp'
import { IconToggleOnTwoTone } from './IconToggleOnTwoTone'

export const IconToggleOn = /*#__PURE__*/ props =>
  createThemedIcon(props, IconToggleOnFilled, IconToggleOnOutlined, IconToggleOnRounded, IconToggleOnSharp, IconToggleOnTwoTone)
