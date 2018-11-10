import { createThemedIcon } from './utils/createThemedIcon'
import { IconBorderVerticalFilled } from './IconBorderVerticalFilled'
import { IconBorderVerticalOutlined } from './IconBorderVerticalOutlined'
import { IconBorderVerticalRounded } from './IconBorderVerticalRounded'
import { IconBorderVerticalSharp } from './IconBorderVerticalSharp'
import { IconBorderVerticalTwoTone } from './IconBorderVerticalTwoTone'

export const IconBorderVertical = /*#__PURE__*/ props =>
  createThemedIcon(props, IconBorderVerticalFilled, IconBorderVerticalOutlined, IconBorderVerticalRounded, IconBorderVerticalSharp, IconBorderVerticalTwoTone)
