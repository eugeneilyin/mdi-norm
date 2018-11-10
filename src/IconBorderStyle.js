import { createThemedIcon } from './utils/createThemedIcon'
import { IconBorderStyleFilled } from './IconBorderStyleFilled'
import { IconBorderStyleOutlined } from './IconBorderStyleOutlined'
import { IconBorderStyleRounded } from './IconBorderStyleRounded'
import { IconBorderStyleSharp } from './IconBorderStyleSharp'
import { IconBorderStyleTwoTone } from './IconBorderStyleTwoTone'

export const IconBorderStyle = /*#__PURE__*/ props =>
  createThemedIcon(props, IconBorderStyleFilled, IconBorderStyleOutlined, IconBorderStyleRounded, IconBorderStyleSharp, IconBorderStyleTwoTone)
