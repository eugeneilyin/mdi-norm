import { createThemedIcon } from './utils/createThemedIcon'
import { IconBlurOnFilled } from './IconBlurOnFilled'
import { IconBlurOnOutlined } from './IconBlurOnOutlined'
import { IconBlurOnRounded } from './IconBlurOnRounded'
import { IconBlurOnSharp } from './IconBlurOnSharp'
import { IconBlurOnTwoTone } from './IconBlurOnTwoTone'

export const IconBlurOn = /*#__PURE__*/ props =>
  createThemedIcon(props, IconBlurOnFilled, IconBlurOnOutlined, IconBlurOnRounded, IconBlurOnSharp, IconBlurOnTwoTone)
