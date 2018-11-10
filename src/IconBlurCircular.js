import { createThemedIcon } from './utils/createThemedIcon'
import { IconBlurCircularFilled } from './IconBlurCircularFilled'
import { IconBlurCircularOutlined } from './IconBlurCircularOutlined'
import { IconBlurCircularRounded } from './IconBlurCircularRounded'
import { IconBlurCircularSharp } from './IconBlurCircularSharp'
import { IconBlurCircularTwoTone } from './IconBlurCircularTwoTone'

export const IconBlurCircular = /*#__PURE__*/ props =>
  createThemedIcon(props, IconBlurCircularFilled, IconBlurCircularOutlined, IconBlurCircularRounded, IconBlurCircularSharp, IconBlurCircularTwoTone)
