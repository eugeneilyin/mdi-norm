import { createThemedIcon } from './utils/createThemedIcon'
import { IconViewCompactFilled } from './IconViewCompactFilled'
import { IconViewCompactOutlined } from './IconViewCompactOutlined'
import { IconViewCompactRounded } from './IconViewCompactRounded'
import { IconViewCompactSharp } from './IconViewCompactSharp'
import { IconViewCompactTwoTone } from './IconViewCompactTwoTone'

export const IconViewCompact = /*#__PURE__*/ props =>
  createThemedIcon(props, IconViewCompactFilled, IconViewCompactOutlined, IconViewCompactRounded, IconViewCompactSharp, IconViewCompactTwoTone)
