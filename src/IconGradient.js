import { createThemedIcon } from './utils/createThemedIcon'
import { IconGradientFilled } from './IconGradientFilled'
import { IconGradientOutlined } from './IconGradientOutlined'
import { IconGradientRounded } from './IconGradientRounded'
import { IconGradientSharp } from './IconGradientSharp'
import { IconGradientTwoTone } from './IconGradientTwoTone'

export const IconGradient = /*#__PURE__*/ props =>
  createThemedIcon(props, IconGradientFilled, IconGradientOutlined, IconGradientRounded, IconGradientSharp, IconGradientTwoTone)
