import { createThemedIcon } from './utils/createThemedIcon'
import { IconAspectRatioFilled } from './IconAspectRatioFilled'
import { IconAspectRatioOutlined } from './IconAspectRatioOutlined'
import { IconAspectRatioRounded } from './IconAspectRatioRounded'
import { IconAspectRatioSharp } from './IconAspectRatioSharp'
import { IconAspectRatioTwoTone } from './IconAspectRatioTwoTone'

export const IconAspectRatio = /*#__PURE__*/ props =>
  createThemedIcon(props, IconAspectRatioFilled, IconAspectRatioOutlined, IconAspectRatioRounded, IconAspectRatioSharp, IconAspectRatioTwoTone)
