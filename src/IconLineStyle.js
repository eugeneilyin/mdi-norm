import { createThemedIcon } from './utils/createThemedIcon'
import { IconLineStyleFilled } from './IconLineStyleFilled'
import { IconLineStyleOutlined } from './IconLineStyleOutlined'
import { IconLineStyleRounded } from './IconLineStyleRounded'
import { IconLineStyleSharp } from './IconLineStyleSharp'
import { IconLineStyleTwoTone } from './IconLineStyleTwoTone'

export const IconLineStyle = /*#__PURE__*/ props =>
  createThemedIcon(props, IconLineStyleFilled, IconLineStyleOutlined, IconLineStyleRounded, IconLineStyleSharp, IconLineStyleTwoTone)
