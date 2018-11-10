import { createThemedIcon } from './utils/createThemedIcon'
import { IconBurstModeFilled } from './IconBurstModeFilled'
import { IconBurstModeOutlined } from './IconBurstModeOutlined'
import { IconBurstModeRounded } from './IconBurstModeRounded'
import { IconBurstModeSharp } from './IconBurstModeSharp'
import { IconBurstModeTwoTone } from './IconBurstModeTwoTone'

export const IconBurstMode = /*#__PURE__*/ props =>
  createThemedIcon(props, IconBurstModeFilled, IconBurstModeOutlined, IconBurstModeRounded, IconBurstModeSharp, IconBurstModeTwoTone)
