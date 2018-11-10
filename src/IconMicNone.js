import { createThemedIcon } from './utils/createThemedIcon'
import { IconMicNoneFilled } from './IconMicNoneFilled'
import { IconMicNoneOutlined } from './IconMicNoneOutlined'
import { IconMicNoneRounded } from './IconMicNoneRounded'
import { IconMicNoneSharp } from './IconMicNoneSharp'
import { IconMicNoneTwoTone } from './IconMicNoneTwoTone'

export const IconMicNone = /*#__PURE__*/ props =>
  createThemedIcon(props, IconMicNoneFilled, IconMicNoneOutlined, IconMicNoneRounded, IconMicNoneSharp, IconMicNoneTwoTone)
