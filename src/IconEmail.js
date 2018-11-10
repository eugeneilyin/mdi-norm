import { createThemedIcon } from './utils/createThemedIcon'
import { IconEmailFilled } from './IconEmailFilled'
import { IconEmailOutlined } from './IconEmailOutlined'
import { IconEmailRounded } from './IconEmailRounded'
import { IconEmailSharp } from './IconEmailSharp'
import { IconEmailTwoTone } from './IconEmailTwoTone'

export const IconEmail = /*#__PURE__*/ props =>
  createThemedIcon(props, IconEmailFilled, IconEmailOutlined, IconEmailRounded, IconEmailSharp, IconEmailTwoTone)
