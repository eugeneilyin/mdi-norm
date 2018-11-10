import { createThemedIcon } from './utils/createThemedIcon'
import { IconDialpadFilled } from './IconDialpadFilled'
import { IconDialpadOutlined } from './IconDialpadOutlined'
import { IconDialpadRounded } from './IconDialpadRounded'
import { IconDialpadSharp } from './IconDialpadSharp'
import { IconDialpadTwoTone } from './IconDialpadTwoTone'

export const IconDialpad = /*#__PURE__*/ props =>
  createThemedIcon(props, IconDialpadFilled, IconDialpadOutlined, IconDialpadRounded, IconDialpadSharp, IconDialpadTwoTone)
