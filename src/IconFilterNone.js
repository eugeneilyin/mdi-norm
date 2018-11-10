import { createThemedIcon } from './utils/createThemedIcon'
import { IconFilterNoneFilled } from './IconFilterNoneFilled'
import { IconFilterNoneOutlined } from './IconFilterNoneOutlined'
import { IconFilterNoneRounded } from './IconFilterNoneRounded'
import { IconFilterNoneSharp } from './IconFilterNoneSharp'
import { IconFilterNoneTwoTone } from './IconFilterNoneTwoTone'

export const IconFilterNone = /*#__PURE__*/ props =>
  createThemedIcon(props, IconFilterNoneFilled, IconFilterNoneOutlined, IconFilterNoneRounded, IconFilterNoneSharp, IconFilterNoneTwoTone)
