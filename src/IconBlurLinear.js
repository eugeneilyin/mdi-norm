import { createThemedIcon } from './utils/createThemedIcon'
import { IconBlurLinearFilled } from './IconBlurLinearFilled'
import { IconBlurLinearOutlined } from './IconBlurLinearOutlined'
import { IconBlurLinearRounded } from './IconBlurLinearRounded'
import { IconBlurLinearSharp } from './IconBlurLinearSharp'
import { IconBlurLinearTwoTone } from './IconBlurLinearTwoTone'

export const IconBlurLinear = /*#__PURE__*/ props =>
  createThemedIcon(props, IconBlurLinearFilled, IconBlurLinearOutlined, IconBlurLinearRounded, IconBlurLinearSharp, IconBlurLinearTwoTone)
