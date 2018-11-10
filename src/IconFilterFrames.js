import { createThemedIcon } from './utils/createThemedIcon'
import { IconFilterFramesFilled } from './IconFilterFramesFilled'
import { IconFilterFramesOutlined } from './IconFilterFramesOutlined'
import { IconFilterFramesRounded } from './IconFilterFramesRounded'
import { IconFilterFramesSharp } from './IconFilterFramesSharp'
import { IconFilterFramesTwoTone } from './IconFilterFramesTwoTone'

export const IconFilterFrames = /*#__PURE__*/ props =>
  createThemedIcon(props, IconFilterFramesFilled, IconFilterFramesOutlined, IconFilterFramesRounded, IconFilterFramesSharp, IconFilterFramesTwoTone)
