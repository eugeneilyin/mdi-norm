import { createThemedIcon } from './utils/createThemedIcon'
import { IconMicFilled } from './IconMicFilled'
import { IconMicOutlined } from './IconMicOutlined'
import { IconMicRounded } from './IconMicRounded'
import { IconMicSharp } from './IconMicSharp'
import { IconMicTwoTone } from './IconMicTwoTone'

export const IconMic = /*#__PURE__*/ props =>
  createThemedIcon(props, IconMicFilled, IconMicOutlined, IconMicRounded, IconMicSharp, IconMicTwoTone)
