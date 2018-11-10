import { createThemedIcon } from './utils/createThemedIcon'
import { IconStyleFilled } from './IconStyleFilled'
import { IconStyleOutlined } from './IconStyleOutlined'
import { IconStyleRounded } from './IconStyleRounded'
import { IconStyleSharp } from './IconStyleSharp'
import { IconStyleTwoTone } from './IconStyleTwoTone'

export const IconStyle = /*#__PURE__*/ props =>
  createThemedIcon(props, IconStyleFilled, IconStyleOutlined, IconStyleRounded, IconStyleSharp, IconStyleTwoTone)
