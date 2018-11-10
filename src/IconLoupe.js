import { createThemedIcon } from './utils/createThemedIcon'
import { IconLoupeFilled } from './IconLoupeFilled'
import { IconLoupeOutlined } from './IconLoupeOutlined'
import { IconLoupeRounded } from './IconLoupeRounded'
import { IconLoupeSharp } from './IconLoupeSharp'
import { IconLoupeTwoTone } from './IconLoupeTwoTone'

export const IconLoupe = /*#__PURE__*/ props =>
  createThemedIcon(props, IconLoupeFilled, IconLoupeOutlined, IconLoupeRounded, IconLoupeSharp, IconLoupeTwoTone)
