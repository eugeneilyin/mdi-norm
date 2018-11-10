import { createThemedIcon } from './utils/createThemedIcon'
import { IconVignetteFilled } from './IconVignetteFilled'
import { IconVignetteOutlined } from './IconVignetteOutlined'
import { IconVignetteRounded } from './IconVignetteRounded'
import { IconVignetteSharp } from './IconVignetteSharp'
import { IconVignetteTwoTone } from './IconVignetteTwoTone'

export const IconVignette = /*#__PURE__*/ props =>
  createThemedIcon(props, IconVignetteFilled, IconVignetteOutlined, IconVignetteRounded, IconVignetteSharp, IconVignetteTwoTone)
