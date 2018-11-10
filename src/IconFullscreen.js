import { createThemedIcon } from './utils/createThemedIcon'
import { IconFullscreenFilled } from './IconFullscreenFilled'
import { IconFullscreenOutlined } from './IconFullscreenOutlined'
import { IconFullscreenRounded } from './IconFullscreenRounded'
import { IconFullscreenSharp } from './IconFullscreenSharp'
import { IconFullscreenTwoTone } from './IconFullscreenTwoTone'

export const IconFullscreen = /*#__PURE__*/ props =>
  createThemedIcon(props, IconFullscreenFilled, IconFullscreenOutlined, IconFullscreenRounded, IconFullscreenSharp, IconFullscreenTwoTone)
