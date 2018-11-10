import { createThemedIcon } from './utils/createThemedIcon'
import { IconBorderBottomFilled } from './IconBorderBottomFilled'
import { IconBorderBottomOutlined } from './IconBorderBottomOutlined'
import { IconBorderBottomRounded } from './IconBorderBottomRounded'
import { IconBorderBottomSharp } from './IconBorderBottomSharp'
import { IconBorderBottomTwoTone } from './IconBorderBottomTwoTone'

export const IconBorderBottom = /*#__PURE__*/ props =>
  createThemedIcon(props, IconBorderBottomFilled, IconBorderBottomOutlined, IconBorderBottomRounded, IconBorderBottomSharp, IconBorderBottomTwoTone)
