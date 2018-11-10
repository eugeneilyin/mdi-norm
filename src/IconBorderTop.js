import { createThemedIcon } from './utils/createThemedIcon'
import { IconBorderTopFilled } from './IconBorderTopFilled'
import { IconBorderTopOutlined } from './IconBorderTopOutlined'
import { IconBorderTopRounded } from './IconBorderTopRounded'
import { IconBorderTopSharp } from './IconBorderTopSharp'
import { IconBorderTopTwoTone } from './IconBorderTopTwoTone'

export const IconBorderTop = /*#__PURE__*/ props =>
  createThemedIcon(props, IconBorderTopFilled, IconBorderTopOutlined, IconBorderTopRounded, IconBorderTopSharp, IconBorderTopTwoTone)
