import { createThemedIcon } from './utils/createThemedIcon'
import { IconDoneFilled } from './IconDoneFilled'
import { IconDoneOutlined } from './IconDoneOutlined'
import { IconDoneRounded } from './IconDoneRounded'
import { IconDoneSharp } from './IconDoneSharp'
import { IconDoneTwoTone } from './IconDoneTwoTone'

export const IconDone = /*#__PURE__*/ props =>
  createThemedIcon(props, IconDoneFilled, IconDoneOutlined, IconDoneRounded, IconDoneSharp, IconDoneTwoTone)
