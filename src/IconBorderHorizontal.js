import { createThemedIcon } from './utils/createThemedIcon'
import { IconBorderHorizontalFilled } from './IconBorderHorizontalFilled'
import { IconBorderHorizontalOutlined } from './IconBorderHorizontalOutlined'
import { IconBorderHorizontalRounded } from './IconBorderHorizontalRounded'
import { IconBorderHorizontalSharp } from './IconBorderHorizontalSharp'
import { IconBorderHorizontalTwoTone } from './IconBorderHorizontalTwoTone'

export const IconBorderHorizontal = /*#__PURE__*/ props =>
  createThemedIcon(props, IconBorderHorizontalFilled, IconBorderHorizontalOutlined, IconBorderHorizontalRounded, IconBorderHorizontalSharp, IconBorderHorizontalTwoTone)
