import { createThemedIcon } from './utils/createThemedIcon'
import { IconBorderOuterFilled } from './IconBorderOuterFilled'
import { IconBorderOuterOutlined } from './IconBorderOuterOutlined'
import { IconBorderOuterRounded } from './IconBorderOuterRounded'
import { IconBorderOuterSharp } from './IconBorderOuterSharp'
import { IconBorderOuterTwoTone } from './IconBorderOuterTwoTone'

export const IconBorderOuter = /*#__PURE__*/ props =>
  createThemedIcon(props, IconBorderOuterFilled, IconBorderOuterOutlined, IconBorderOuterRounded, IconBorderOuterSharp, IconBorderOuterTwoTone)
