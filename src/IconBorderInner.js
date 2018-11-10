import { createThemedIcon } from './utils/createThemedIcon'
import { IconBorderInnerFilled } from './IconBorderInnerFilled'
import { IconBorderInnerOutlined } from './IconBorderInnerOutlined'
import { IconBorderInnerRounded } from './IconBorderInnerRounded'
import { IconBorderInnerSharp } from './IconBorderInnerSharp'
import { IconBorderInnerTwoTone } from './IconBorderInnerTwoTone'

export const IconBorderInner = /*#__PURE__*/ props =>
  createThemedIcon(props, IconBorderInnerFilled, IconBorderInnerOutlined, IconBorderInnerRounded, IconBorderInnerSharp, IconBorderInnerTwoTone)
