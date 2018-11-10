import { createThemedIcon } from './utils/createThemedIcon'
import { IconListAltFilled } from './IconListAltFilled'
import { IconListAltOutlined } from './IconListAltOutlined'
import { IconListAltRounded } from './IconListAltRounded'
import { IconListAltSharp } from './IconListAltSharp'
import { IconListAltTwoTone } from './IconListAltTwoTone'

export const IconListAlt = /*#__PURE__*/ props =>
  createThemedIcon(props, IconListAltFilled, IconListAltOutlined, IconListAltRounded, IconListAltSharp, IconListAltTwoTone)
