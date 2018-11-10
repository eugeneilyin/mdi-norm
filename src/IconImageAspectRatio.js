import { createThemedIcon } from './utils/createThemedIcon'
import { IconImageAspectRatioFilled } from './IconImageAspectRatioFilled'
import { IconImageAspectRatioOutlined } from './IconImageAspectRatioOutlined'
import { IconImageAspectRatioRounded } from './IconImageAspectRatioRounded'
import { IconImageAspectRatioSharp } from './IconImageAspectRatioSharp'
import { IconImageAspectRatioTwoTone } from './IconImageAspectRatioTwoTone'

export const IconImageAspectRatio = /*#__PURE__*/ props =>
  createThemedIcon(props, IconImageAspectRatioFilled, IconImageAspectRatioOutlined, IconImageAspectRatioRounded, IconImageAspectRatioSharp, IconImageAspectRatioTwoTone)
